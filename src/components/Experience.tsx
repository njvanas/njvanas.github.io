import React from 'react';
import { slugify } from '../utils/slug';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
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

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Over a decade of experience in cybersecurity and IT infrastructure across multiple continents.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 flex flex-wrap gap-3 text-sm">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={`#${slugify(exp.title)}`}
              className="text-blue-400 hover:underline"
            >
              {exp.company}
            </a>
          ))}
        </div>

        {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500/30 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} id={slugify(exp.title)} className="relative mb-12 md:ml-16">
                {/* Timeline Dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 hidden md:block"></div>
                
                {/* Experience Card */}
                <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors duration-300 border border-slate-700/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                        {exp.current && (
                          <span className="ml-2 px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center text-blue-400 mb-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2 mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;