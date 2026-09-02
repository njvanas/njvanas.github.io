#!/usr/bin/env node
/**
 * Refresh src/data/dependabot.json from GitHub Dependabot pull requests,
 * npm audit, and Dependabot alerts when the token can read them.
 *
 * Usage: node scripts/refresh-dependabot.mjs
 */
import { execFileSync, execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_FILE = join(ROOT, 'src/data/dependabot.json');
const LOCK_FILE = join(ROOT, 'package-lock.json');
const REPO = 'njvanas/njvanas.github.io';
const MAX_RECENT = 6;

const BUMP_TITLE =
  /^Bump(?: the .+? group with updates?| (.+?))(?: from ([^\s]+) to ([^\s]+))?$/i;

function ghJson(args) {
  const stdout = execFileSync('gh', args, {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  return JSON.parse(stdout);
}

function tryGhJson(args) {
  try {
    return { ok: true, data: ghJson(args) };
  } catch (error) {
    const stderr = error.stderr?.toString() ?? error.message;
    return { ok: false, error: stderr.trim() };
  }
}

function lockfileVersions() {
  const lock = JSON.parse(readFileSync(LOCK_FILE, 'utf8'));
  const packages = lock.packages ?? {};
  const versions = {};
  for (const [path, meta] of Object.entries(packages)) {
    if (!path.startsWith('node_modules/') || path.slice('node_modules/'.length).includes('/')) {
      continue;
    }
    const name = path.slice('node_modules/'.length);
    if (meta?.version) {
      versions[name] = meta.version;
    }
  }
  return versions;
}

function parseBumpTitle(title) {
  const match = title.match(BUMP_TITLE);
  if (!match) {
    return { packageName: null, fromVersion: null, toVersion: null };
  }
  return {
    packageName: match[1] ? match[1].replace(/`/g, '').trim() : null,
    fromVersion: match[2] ?? null,
    toVersion: match[3] ?? null,
  };
}

function compareVersions(a, b) {
  if (!a || !b) return null;
  const pa = a.split('.').map((n) => Number.parseInt(n, 10) || 0);
  const pb = b.split('.').map((n) => Number.parseInt(n, 10) || 0);
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i += 1) {
    const da = pa[i] ?? 0;
    const db = pb[i] ?? 0;
    if (da > db) return 1;
    if (da < db) return -1;
  }
  return 0;
}

function npmAudit() {
  try {
    const stdout = execSync('npm audit --json', {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return JSON.parse(stdout);
  } catch (error) {
    const stdout = error.stdout?.toString();
    if (stdout) {
      try {
        return JSON.parse(stdout);
      } catch {
        /* fall through */
      }
    }
    return { metadata: { vulnerabilities: { total: 0, info: 0, low: 0, moderate: 0, high: 0, critical: 0 } } };
  }
}

function mapPull(pr, versions) {
  const parsed = parseBumpTitle(pr.title);
  const currentVersion = parsed.packageName ? versions[parsed.packageName] ?? null : null;
  const cmp = compareVersions(currentVersion, parsed.toVersion);
  const superseded =
    pr.state === 'OPEN' && cmp !== null && cmp >= 0;

  return {
    number: pr.number,
    title: pr.title,
    url: pr.url,
    state: pr.state,
    createdAt: pr.createdAt,
    mergedAt: pr.mergedAt,
    packageName: parsed.packageName,
    fromVersion: parsed.fromVersion,
    toVersion: parsed.toVersion,
    currentVersion,
    superseded,
  };
}

function alertsUnavailableReason(stderr) {
  if (/Resource not accessible|403|vulnerability_alerts/i.test(stderr)) {
    return 'GitHub token cannot read Dependabot alerts (needs vulnerability_alerts). Pull requests are still listed.';
  }
  if (/Not Found|404/i.test(stderr)) {
    return 'Dependabot alerts are not enabled or not visible for this repository.';
  }
  return stderr.slice(0, 280) || 'Dependabot alerts could not be read.';
}

function main() {
  const versions = lockfileVersions();
  const pulls = ghJson([
    'pr',
    'list',
    '--repo',
    REPO,
    '--author',
    'app/dependabot',
    '--state',
    'all',
    '--limit',
    '30',
    '--json',
    'number,title,state,mergedAt,createdAt,url',
  ]);

  const mapped = pulls.map((pr) => mapPull(pr, versions));
  const openPullRequests = mapped.filter((pr) => pr.state === 'OPEN');
  const recentUpdates = mapped
    .filter((pr) => pr.state === 'MERGED')
    .sort((a, b) => String(b.mergedAt).localeCompare(String(a.mergedAt)))
    .slice(0, MAX_RECENT);

  const audit = npmAudit();
  const vulnMeta = audit.metadata?.vulnerabilities ?? {};
  const alertsResult = tryGhJson([
    'api',
    `repos/${REPO}/dependabot/alerts`,
    '--paginate',
    '-q',
    '[.[] | {number, state, severity: .security_advisory.severity, package: .dependency.package.name}]',
  ]);

  let alerts = {
    available: false,
    reason: null,
    open: 0,
    fixed: 0,
    dismissed: 0,
    bySeverity: { low: 0, medium: 0, high: 0, critical: 0 },
  };

  if (alertsResult.ok && Array.isArray(alertsResult.data)) {
    alerts.available = true;
    for (const item of alertsResult.data) {
      if (item.state === 'open') alerts.open += 1;
      else if (item.state === 'fixed') alerts.fixed += 1;
      else if (item.state === 'dismissed') alerts.dismissed += 1;
      if (item.state === 'open' && item.severity && alerts.bySeverity[item.severity] !== undefined) {
        alerts.bySeverity[item.severity] += 1;
      }
    }
  } else {
    alerts.reason = alertsUnavailableReason(alertsResult.error ?? '');
  }

  const actionableOpen = openPullRequests.filter((pr) => !pr.superseded).length;
  const snapshot = {
    updatedAt: new Date().toISOString(),
    repository: REPO,
    status:
      vulnMeta.total > 0
        ? 'advisories'
        : actionableOpen > 0
          ? 'updates-pending'
          : 'current',
    npmAudit: {
      total: vulnMeta.total ?? 0,
      info: vulnMeta.info ?? 0,
      low: vulnMeta.low ?? 0,
      moderate: vulnMeta.moderate ?? 0,
      high: vulnMeta.high ?? 0,
      critical: vulnMeta.critical ?? 0,
    },
    alerts,
    openCount: openPullRequests.length,
    actionableOpenCount: actionableOpen,
    openPullRequests,
    recentUpdates,
  };

  writeFileSync(OUT_FILE, `${JSON.stringify(snapshot, null, 2)}\n`);
  process.stdout.write(`Wrote ${OUT_FILE} (${snapshot.status}, ${snapshot.openCount} open Dependabot PRs)\n`);
}

main();
