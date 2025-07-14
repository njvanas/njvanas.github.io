import React from 'react';
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
      location: "Netherlands",
      period: "June 2025 - Present",
      current: true,
      description: [
        "Leading workspace administration and user authentication systems",
        "Implementing Azure identity solutions and access management policies",
        "Collaborating with DevOps teams on security governance initiatives",
        "Managing hybrid cloud environments and compliance frameworks"
      ]
    },
    {
      title: "User Authentication & Authorization Specialist",
      company: "Previous Organization",
      location: "Netherlands",
      period: "2023 - 2025",
      description: [
        "Specialized in identity and access management solutions",
        "Developed and maintained PowerShell automation scripts",
        "Implemented Conditional Access policies and security controls",
        "Managed Intune and Autopilot deployments for device management"
      ]
    },
    {
      title: "IT Servicedesk Specialist",
      company: "Various Organizations",
      location: "South Africa & Netherlands",
      period: "2020 - 2023",
      description: [
        "Provided technical support and troubleshooting for IT infrastructure",
        "Managed user accounts and access permissions",
        "Implemented security best practices and compliance measures",
        "Collaborated with cross-functional teams on system improvements"
      ]
    },
    {
      title: "IT Coordinator/Manager",
      company: "Early Career Positions",
      location: "South Africa",
      period: "2015 - 2020",
      description: [
        "Coordinated IT operations and infrastructure management",
        "Led small teams in implementing technology solutions",
        "Developed foundational skills in cybersecurity and system administration",
        "Built expertise in network security and user management"
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

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500/30 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
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