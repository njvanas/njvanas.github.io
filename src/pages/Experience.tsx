import React from 'react';
import { ArrowLeft, Building2, Calendar, MapPin, Award, Briefcase } from 'lucide-react';

function ExperienceCard({
  company,
  position,
  period,
  location,
  description,
  achievements
}: {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-100">{position}</h3>
          <div className="flex items-center text-gray-300 mt-1">
            <Building2 className="w-4 h-4 mr-2" />
            {company}
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            {period}
          </div>
          <div className="flex items-center text-gray-300 mt-1">
            <MapPin className="w-4 h-4 mr-2" />
            {location}
          </div>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <Award className="w-4 h-4 mr-2 text-blue-400 mt-1 flex-shrink-0" />
            <span className="text-gray-300">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  const experiences = [
  {
    company: "Quion Groep",
    position: "User Authentication and Authorization Specialist",
    period: "June 2024 - Present",
    location: "Rotterdam, Netherlands",
    description: "Implemented and managed secure authentication systems while ensuring regulatory compliance.",
    achievements: [
      "Designed and deployed SSO and MFA solutions, improving user authentication security.",
      "Automated user provisioning and deprovisioning processes, reducing manual workload by 50%.",
      "Enhanced compliance with GDPR, ISO 27001, and SOC2 through improved workflows."
    ]
  },
  {
    company: "Blauwtrust Groep",
    position: "IT Servicedesk Medewerker",
    period: "September 2023 - May 2024",
    location: "Rotterdam, Netherlands",
    description: "Provided IT support and managed Azure tenant configurations.",
    achievements: [
      "Streamlined onboarding and offboarding processes, improving efficiency by 30%.",
      "Implemented Intune policies for secure device management.",
      "Optimized IT workflows, ensuring alignment with ISO and ISAE standards."
    ]
  },
  {
    company: "Unique Hydra & Gist",
    position: "IT Coordinator/Manager",
    period: "October 2021 - August 2023",
    location: "Epping/Bellville, South Africa",
    description: "Managed IT operations, budgets, and hybrid IT environments.",
    achievements: [
      "Revised user creation workflows, reducing ticket resolution times by 40%.",
      "Introduced automated approval systems for faster decision-making.",
      "Effectively managed IT budgets, achieving cost savings across hardware procurement."
    ]
  },
  {
    company: "DiPAR Systems",
    position: "Systems Administrator/IT Specialist",
    period: "January 2018 - September 2021",
    location: "Tyger Valley, South Africa",
    description: "Oversaw network servers, deployments, and IT environments.",
    achievements: [
      "Implemented backup solutions, ensuring 99.9% system uptime.",
      "Upgraded on-premise systems to hybrid Office 365 environments.",
      "Automated SQL Server database management, reducing manual intervention by 60%."
    ]
  }
];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <a 
          href="/" 
          className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </a>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Professional Experience</h1>
          <p className="text-gray-300">A journey of continuous growth and impact</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Experience;