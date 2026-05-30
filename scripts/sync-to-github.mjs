#!/usr/bin/env node
/**
 * Commits and pushes local changes to origin/main.
 * Used by Cursor hooks and optional file watcher (npm run watch:sync).
 */
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const STATE_DIR = join(ROOT, '.cursor');
const STATE_FILE = join(STATE_DIR, 'sync-state.json');
const LOG_FILE = join(STATE_DIR, 'sync.log');
const DEBOUNCE_MS = 15_000;
const TARGET_BRANCH = 'main';

function log(message) {
  const line = `[sync] ${new Date().toISOString()} ${message}\n`;
  mkdirSync(STATE_DIR, { recursive: true });
  writeFileSync(LOG_FILE, line, { flag: 'a' });
  if (process.env.SYNC_VERBOSE === '1') {
    process.stderr.write(line);
  }
}

function readState() {
  if (!existsSync(STATE_FILE)) {
    return { lastRun: 0 };
  }
  try {
    return JSON.parse(readFileSync(STATE_FILE, 'utf8'));
  } catch {
    return { lastRun: 0 };
  }
}

function writeState(lastRun) {
  mkdirSync(STATE_DIR, { recursive: true });
  writeFileSync(STATE_FILE, JSON.stringify({ lastRun }));
}

function git(args) {
  return execSync(`git ${args}`, {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
}

function main() {
  if (process.env.SYNC_DISABLE === '1') {
    log('skipped (SYNC_DISABLE=1)');
    return;
  }

  const force = process.argv.includes('--force');
  const now = Date.now();
  const { lastRun } = readState();

  if (!force && now - lastRun < DEBOUNCE_MS) {
    log('skipped (debounced)');
    return;
  }

  writeState(now);

  let branch;
  try {
    branch = git('rev-parse --abbrev-ref HEAD');
  } catch (error) {
    log(`failed: not a git repository (${error.message})`);
    return;
  }

  if (branch !== TARGET_BRANCH) {
    log(`skipped (branch is ${branch}, expected ${TARGET_BRANCH})`);
    return;
  }

  if (existsSync(join(ROOT, '.git', 'MERGE_HEAD'))) {
    log('skipped (merge in progress)');
    return;
  }

  const porcelain = git('status --porcelain');
  if (!porcelain) {
    log('skipped (no changes)');
    return;
  }

  try {
    git('add -A');
    const summary = porcelain
      .split('\n')
      .slice(0, 8)
      .map((line) => line.trim())
      .filter(Boolean)
      .join('\n');
    const body = summary || 'portfolio update';
    git(`commit -m "chore: auto-sync portfolio updates" -m ${JSON.stringify(body)}`);
    git(`push origin ${TARGET_BRANCH}`);
    log('pushed to GitHub');
  } catch (error) {
    const detail = error.stderr?.toString().trim() || error.message;
    log(`failed: ${detail}`);
  }
}

main();
