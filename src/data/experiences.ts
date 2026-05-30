export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    title: "Senior Cloud/Microsoft 365 Engineer",
    company: "DeLorentz & Partners",
    location: "Hilversum, Netherlands",
    period: "Dec 2025 - Present",
    current: true,
    description: [
      "Design and deliver Microsoft 365 and Azure solutions for 60+ organizations",
      "Identity and security with Entra ID, Conditional Access, Intune, Defender, SharePoint, and Teams",
      "Third-line expert for migrations, tenant issues, and complex security incidents",
      "Automate operations with PowerShell and Microsoft Graph across 40+ Microsoft 365 tenants"
    ]
  },
  {
    title: "Workspace Administrator",
    company: "Quion Groep",
    location: "Rotterdam, Netherlands",
    period: "Jun 2025 - Dec 2025",
    description: [
      "Administered Microsoft 365 and Azure workspaces: Entra ID, Exchange Online, SharePoint, and Teams",
      "Managed device lifecycle with Intune and Autopilot; enforced endpoint compliance",
      "Implemented Conditional Access, MFA, and governance aligned with security policies",
      "Automated administration with PowerShell and Graph API; monitored environments with Defender and Azure Monitor"
    ]
  },
  {
    title: "User Authentication & Authorization Specialist",
    company: "Quion Groep",
    location: "Rotterdam, Netherlands",
    period: "Jun 2024 - Jun 2025",
    description: [
      "Implemented SSO, MFA, RBAC, and authorization matrices across enterprise systems",
      "Automated identity lifecycle: provisioning, access reviews, and deprovisioning",
      "Ensured compliance with GDPR, ISO 27001, ISAE 3402, and SOC 2 requirements",
      "Investigated authentication incidents with cybersecurity teams and supported secure access for users"
    ]
  },
  {
    title: "Service Desk Medewerker",
    company: "Blauwtrust Groep",
    location: "Rotterdam, Netherlands",
    period: "Sep 2023 - May 2024",
    description: [
      "Managed multiple Azure tenants with Intune policies and hybrid Active Directory",
      "Provided support to staff and clients via phone, email, and Jira",
      "Maintained hardware inventory and on-premises Windows Server 2016 environments",
      "Improved onboarding, offboarding, change requests, and logical access workflows for ISO and ISAE controls"
    ]
  },
  {
    title: "IT Coordinator/Manager",
    company: "Unique Group",
    location: "South Africa",
    period: "Oct 2021 - Aug 2023",
    description: [
      "Managed Sophos firewall, VPN, VLANs, and DHCP for the Cape Town district",
      "Administered Hyper-V servers (2012–2019), hybrid Azure AD, Office 365, and Teams",
      "Oversaw engineering software licensing and IT budget for the Cape Town branch",
      "Led one IT team member; streamlined user creation, approvals, and ticketing workflows"
    ]
  },
  {
    title: "Managing Director",
    company: "NVA PC Tech",
    location: "South Africa",
    period: "Aug 2020 - Aug 2023",
    description: [
      "Directed IT consulting, WordPress development, and digital marketing services",
      "Managed client relationships, sales, and project delivery",
      "Focused on SEO and web solutions for small business clients"
    ]
  },
  {
    title: "Junior System Administrator / IT Specialist",
    company: "DiPAR Systems",
    location: "Cape Town, South Africa",
    period: "Jan 2018 - Sep 2021",
    description: [
      "Managed Ubuntu RADIUS servers, hosted client environments, and internal infrastructure",
      "Migrated mail to Office 365 and administered SQL Server databases and upgrades",
      "Operated Hyper-V, VMware, and VirtualBox VMs with Veeam, Altaro, and Cobian backups",
      "Coordinated DevOps and manual deployments; maintained SSL certificates, DNS, VPN, and Wi‑Fi networks"
    ]
  },
  {
    title: "IT Training Advisor",
    company: "Boston City Campus & Business College",
    location: "Somerset West, South Africa",
    period: "Aug 2016 - Dec 2017",
    description: [
      "Maintained campus network, servers, and proprietary learning systems",
      "Serviced student desktops and coordinated printer repairs",
      "Supported students across IT subjects and course material",
      "Assisted with oversight of Pearson VUE certification exams"
    ]
  },
  {
    title: "Sales Representative",
    company: "Computer Zone",
    location: "Somerset West, South Africa",
    period: "Mar 2016",
    description: [
      "Performed stock taking and retail sales",
      "Advised customers and referred them to suitable products"
    ]
  },
  {
    title: "Co-Owner & Shareholder",
    company: "Malagas Byeboerdery",
    location: "Villiersdorp, South Africa",
    period: "Jan 2014 - Present",
    description: [
      "Produce raw honey and provide pollination services for local agriculture",
      "Promote sustainable, ethical beekeeping and hive management",
      "Oversee operations, marketing, and biodiversity-focused practices"
    ]
  }
];

export default experiences;
