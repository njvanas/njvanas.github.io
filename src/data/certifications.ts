export type LearnCertification = {
  kind: 'learn';
  title: string;
  badgeImageUrl: string;
  badgePageUrl: string;
};

export type CredlyCertification = {
  kind: 'credly';
  title: string;
  shareBadgeId: string;
  iframeWidth: number;
  iframeHeight: number;
  publicUrl: string;
};

export type Certification = LearnCertification | CredlyCertification;

export const certifications: Certification[] = [
  {
    kind: 'learn',
    title: 'Microsoft Certified: Azure Fundamentals',
    badgeImageUrl:
      'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
    badgePageUrl:
      'https://learn.microsoft.com/en-us/users/njvanas-2563/credentials/1b0dfb6c13cb87ef',
  },
  {
    kind: 'credly',
    title: 'CompTIA IT Operations Specialist (CIOS)',
    shareBadgeId: 'b1ac4c73-ba50-47ff-8ccb-387db32d06c7',
    iframeWidth: 150,
    iframeHeight: 270,
    publicUrl: 'https://www.credly.com/badges/b1ac4c73-ba50-47ff-8ccb-387db32d06c7/public_url',
  },
  {
    kind: 'credly',
    title: 'MCSA: SQL 2016 Database Administration',
    shareBadgeId: '41439224-8112-4448-ad8d-38f3bf9da4a6',
    iframeWidth: 150,
    iframeHeight: 270,
    publicUrl: 'https://www.credly.com/badges/41439224-8112-4448-ad8d-38f3bf9da4a6/public_url',
  },
];
