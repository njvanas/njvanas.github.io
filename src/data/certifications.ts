/**
 * Digital credentials shown on the site.
 * Credly badges use official artwork URLs (same graphics Credly uses for share previews).
 */
export interface Certification {
  title: string;
  badgeImageUrl: string;
  /** Microsoft Learn credential page or Credly public badge URL */
  credentialUrl: string;
}

export const certifications: Certification[] = [
  {
    title: 'CompTIA IT Fundamentals (ITF+)',
    badgeImageUrl:
      'https://images.credly.com/images/1d7f03e6-9f1b-4262-a79c-d4d4a6761b63/linkedin_thumb_CompTIA_ITFund.png',
    credentialUrl: 'https://www.credly.com/badges/74f00aab-b2f8-41aa-bc57-9522e1b87271/public_url',
  },
  {
    title: 'CompTIA A+ ce',
    badgeImageUrl:
      'https://images.credly.com/images/f6d62c5d-1e1d-4de6-92ee-8dc8c80b1c7b/linkedin_thumb_blob',
    credentialUrl: 'https://www.credly.com/badges/50a59300-ac5b-42db-aa10-7b3371a541d8/public_url',
  },
  {
    title: 'CompTIA Network+ ce',
    badgeImageUrl:
      'https://images.credly.com/images/c70ba73e-3c8a-46fa-9d60-4a9af94ad662/linkedin_thumb_blob',
    credentialUrl: 'https://www.credly.com/badges/13003ae3-63c5-473a-ad21-30aa3aace4d0/public_url',
  },
  {
    title: 'CompTIA IT Operations Specialist (CIOS)',
    badgeImageUrl:
      'https://images.credly.com/images/7f7657b9-4d1b-4b8d-b5ee-5fdf6d7ccd71/linkedin_thumb_04294_CompTIA_Cert_Badges_Specialist_-_CIOS.png',
    credentialUrl: 'https://www.credly.com/badges/b1ac4c73-ba50-47ff-8ccb-387db32d06c7/public_url',
  },
  {
    title: 'MCSA: SQL 2016 Database Administration',
    badgeImageUrl:
      'https://images.credly.com/images/fd72f78e-3d53-4c44-beb4-b0c53f2e2dc9/linkedin_thumb_MCSA-SQL_2016_Database_Administration.png',
    credentialUrl: 'https://www.credly.com/badges/41439224-8112-4448-ad8d-38f3bf9da4a6/public_url',
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    badgeImageUrl:
      'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
    credentialUrl:
      'https://learn.microsoft.com/en-us/users/njvanas-2563/credentials/1b0dfb6c13cb87ef',
  },
];
