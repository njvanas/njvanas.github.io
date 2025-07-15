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
    title: "Workspace Administrator",
    company: "Quion Groep",
    location: "Rotterdam, Netherlands",
    period: "Jun 2025 - Present",
    current: true,
    description: [
      "Manage modern workspaces with M365 and Azure",
      "Automate tasks using PowerShell and Graph API",
      "Enforce governance with Conditional Access",
      "Collaborate on cloud-first security initiatives"
    ]
  },
  {
    title: "User Authentication & Authorization Specialist",
    company: "Quion Groep",
    location: "Rotterdam, Netherlands",
    period: "Jun 2024 - Jun 2025",
    description: [
      "Implemented SSO and MFA solutions",
      "Automated user lifecycle and access reviews",
      "Ensured GDPR and ISO compliance",
      "Supported users with secure authentication"
    ]
  },
  {
    title: "Service Desk Medewerker",
    company: "Blauwtrust Groep",
    location: "Rotterdam, Netherlands",
    period: "Sep 2023 - May 2024",
    description: [
      "Managed Azure tenants with Intune policies",
      "Provided support via phone, email and Jira",
      "Maintained hardware inventory and Active Directory",
      "Improved onboarding and change processes"
    ]
  },
  {
    title: "IT Coordinator/Manager",
    company: "Unique Group",
    location: "South Africa",
    period: "Oct 2021 - Aug 2023",
    description: [
      "Administered Sophos firewall and hybrid AD",
      "Oversaw servers on Hyper-V and Office 365",
      "Managed licensing and IT budget",
      "Streamlined user workflows and approvals"
    ]
  },
  {
    title: "Managing Director",
    company: "NVA PC Tech",
    location: "South Africa",
    period: "Aug 2020 - Aug 2023",
    description: [
      "Directed IT consulting and WordPress services",
      "Focused on SEO and digital marketing",
      "Managed client relations and sales"
    ]
  },
  {
    title: "Junior System Administrator / IT Specialist",
    company: "DiPAR Systems",
    location: "Cape Town, South Africa",
    period: "Jan 2018 - Sep 2021",
    description: [
      "Managed Radius servers and hosted environments",
      "Handled SSL certificates and domain services",
      "Maintained network, servers and VMs",
      "Coordinated deployments and backups"
    ]
  },
  {
    title: "IT Training Advisor",
    company: "Boston City Campus & Business College",
    location: "Somerset West, South Africa",
    period: "Aug 2016 - Dec 2017",
    description: [
      "Maintained campus network and servers",
      "Serviced desktops and printers",
      "Assisted students with IT subjects",
      "Supervised Pearson VUE exams"
    ]
  },
  {
    title: "Sales Representative",
    company: "Computer Zone",
    location: "Somerset West, South Africa",
    period: "Mar 2016",
    description: [
      "Performed stock taking and sales",
      "Advised clients on suitable products"
    ]
  },
  {
    title: "Co-Owner & Shareholder",
    company: "Malagas Byeboerdery",
    location: "Villiersdorp, South Africa",
    period: "Jan 2014 - Present",
    description: [
      "Produce raw honey and pollination services",
      "Promote sustainable beekeeping practices",
      "Oversee operations and marketing"
    ]
  }
];
