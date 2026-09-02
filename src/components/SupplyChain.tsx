import React from 'react';
import { CheckCircle2, ExternalLink, GitPullRequest, Package, ShieldCheck } from 'lucide-react';
import { handleExternalLink } from '../utils/security';
import dependabotSnapshot, { DependabotPull, SupplyChainStatus } from '../data/dependabot';

const statusCopy: Record<
  SupplyChainStatus,
  { label: string; detail: string; badge: string }
> = {
  current: {
    label: 'Dependencies current',
    detail: 'No actionable Dependabot updates. npm audit reports no known vulnerabilities.',
    badge: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30',
  },
  'updates-pending': {
    label: 'Updates pending',
    detail: 'Dependabot has open version-update pull requests that are not yet in the lockfile.',
    badge: 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30',
  },
  advisories: {
    label: 'Advisories open',
    detail: 'npm audit still reports known vulnerabilities in the dependency tree.',
    badge: 'bg-rose-500/15 text-rose-300 ring-1 ring-rose-500/30',
  },
};

function formatDate(iso: string | null): string {
  if (!iso) return '—';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function pullSummary(pr: DependabotPull): string {
  if (pr.packageName && pr.fromVersion && pr.toVersion) {
    return `${pr.packageName} ${pr.fromVersion} → ${pr.toVersion}`;
  }
  return pr.title.replace(/^Bump\s+/i, '');
}

const githubDependabotUrl = `https://github.com/${dependabotSnapshot.repository}/pulls?q=is%3Apr+author%3Aapp%2Fdependabot`;

const SupplyChain: React.FC = () => {
  const { status, npmAudit, openPullRequests, recentUpdates, updatedAt, actionableOpenCount } =
    dependabotSnapshot;
  const copy = statusCopy[status];

  return (
    <section id="supply-chain" className="scroll-mt-24 py-20 bg-slate-900/50">
      <div className="container w-full mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Supply Chain
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Live Dependabot status for this portfolio — the same dependency updates
              GitHub opens on the public repo, refreshed into the site.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-6 md:p-8 mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <ShieldCheck className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${copy.badge}`}>
                    {copy.label}
                  </span>
                  <p className="text-gray-300 mt-3 max-w-xl">{copy.detail}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Snapshot {formatDate(updatedAt)}
                  </p>
                </div>
              </div>
              <a
                href={githubDependabotUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  handleExternalLink(githubDependabotUrl);
                }}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
              >
                View on GitHub
                <ExternalLink className="w-4 h-4" aria-hidden />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 p-5">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <GitPullRequest className="w-4 h-4" />
                  Open Dependabot PRs
                </div>
                <p className="text-3xl font-semibold text-white">{dependabotSnapshot.openCount}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {actionableOpenCount} still needed in the lockfile
                </p>
              </div>
              <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 p-5">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  npm audit
                </div>
                <p className="text-3xl font-semibold text-white">{npmAudit.total}</p>
                <p className="text-sm text-gray-500 mt-1">known vulnerabilities in the tree</p>
              </div>
              <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 p-5">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <Package className="w-4 h-4" />
                  Recent merges
                </div>
                <p className="text-3xl font-semibold text-white">{recentUpdates.length}</p>
                <p className="text-sm text-gray-500 mt-1">latest Dependabot updates applied</p>
              </div>
            </div>
          </div>

          {openPullRequests.length > 0 && (
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-4">Open updates</h3>
              <ul className="space-y-3">
                {openPullRequests.map((pr) => (
                  <li
                    key={pr.number}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-lg border border-slate-700/50 bg-slate-800/40 px-5 py-4"
                  >
                    <div>
                      <a
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.preventDefault();
                          handleExternalLink(pr.url);
                        }}
                        className="text-white hover:text-blue-300 font-medium"
                      >
                        #{pr.number} {pullSummary(pr)}
                      </a>
                      <p className="text-sm text-gray-400 mt-1">
                        Opened {formatDate(pr.createdAt)}
                        {pr.superseded && pr.currentVersion
                          ? ` · already on ${pr.currentVersion} in the lockfile`
                          : ''}
                      </p>
                    </div>
                    {pr.superseded ? (
                      <span className="text-xs uppercase tracking-wide text-gray-400 bg-slate-900/60 px-2 py-1 rounded self-start">
                        Superseded
                      </span>
                    ) : (
                      <span className="text-xs uppercase tracking-wide text-amber-300 bg-amber-500/10 px-2 py-1 rounded self-start">
                        Pending
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Recently applied</h3>
            <ul className="divide-y divide-slate-700/50 rounded-lg border border-slate-700/50 bg-slate-800/40">
              {recentUpdates.map((pr) => (
                <li key={pr.number} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-5 py-4">
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleExternalLink(pr.url);
                    }}
                    className="text-gray-200 hover:text-blue-300"
                  >
                    #{pr.number} {pullSummary(pr)}
                  </a>
                  <span className="text-sm text-gray-500">Merged {formatDate(pr.mergedAt)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChain;
