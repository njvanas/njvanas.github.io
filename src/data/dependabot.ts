import snapshot from './dependabot.json';

export type SupplyChainStatus = 'current' | 'updates-pending' | 'advisories';

export interface DependabotPull {
  number: number;
  title: string;
  url: string;
  state: 'OPEN' | 'MERGED' | 'CLOSED' | string;
  createdAt: string;
  mergedAt: string | null;
  packageName: string | null;
  fromVersion: string | null;
  toVersion: string | null;
  currentVersion: string | null;
  superseded: boolean;
}

export interface DependabotSnapshot {
  updatedAt: string;
  repository: string;
  status: SupplyChainStatus;
  npmAudit: {
    total: number;
    info: number;
    low: number;
    moderate: number;
    high: number;
    critical: number;
  };
  alerts: {
    available: boolean;
    reason: string | null;
    open: number;
    fixed: number;
    dismissed: number;
    bySeverity: {
      low: number;
      medium: number;
      high: number;
      critical: number;
    };
  };
  openCount: number;
  actionableOpenCount: number;
  openPullRequests: DependabotPull[];
  recentUpdates: DependabotPull[];
}

export const dependabotSnapshot = snapshot as DependabotSnapshot;

export default dependabotSnapshot;
