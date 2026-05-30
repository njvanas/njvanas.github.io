export type CoreExpertiseItem = {
  id: string;
  label: string;
  iconSrc: string;
  iconAlt: string;
};

export const coreExpertise: CoreExpertiseItem[] = [
  {
    id: 'intune',
    label: 'Intune',
    iconSrc: '/icons/expertise/intune.svg',
    iconAlt: 'Microsoft Intune',
  },
  {
    id: 'sharepoint',
    label: 'SharePoint',
    iconSrc: '/icons/expertise/sharepoint.svg',
    iconAlt: 'Microsoft SharePoint',
  },
  {
    id: 'teams',
    label: 'Teams',
    iconSrc: '/icons/expertise/teams.svg',
    iconAlt: 'Microsoft Teams',
  },
  {
    id: 'defender',
    label: 'Defender',
    iconSrc: '/icons/expertise/defender.svg',
    iconAlt: 'Microsoft Defender',
  },
  {
    id: 'entra',
    label: 'Entra',
    iconSrc: '/icons/expertise/entra.svg',
    iconAlt: 'Microsoft Entra ID',
  },
  {
    id: 'purview',
    label: 'Purview',
    iconSrc: '/icons/expertise/purview.svg',
    iconAlt: 'Microsoft Purview',
  },
  {
    id: 'sql',
    label: 'SQL Database Administration',
    iconSrc: '/icons/expertise/sql.svg',
    iconAlt: 'Microsoft SQL Server',
  },
  {
    id: 'avd',
    label: 'AVD',
    iconSrc: '/icons/expertise/avd.svg',
    iconAlt: 'Azure Virtual Desktop',
  },
  {
    id: 'vmware-vdi',
    label: 'VMware VDI',
    iconSrc: '/icons/expertise/vmware.svg',
    iconAlt: 'VMware',
  },
  {
    id: 'aks',
    label: 'AKS',
    iconSrc: '/icons/expertise/aks.svg',
    iconAlt: 'Azure Kubernetes Service',
  },
];
