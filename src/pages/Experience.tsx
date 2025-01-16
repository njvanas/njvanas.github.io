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
      company: "Innovation Corp",
      position: "Senior Software Engineer",
      period: "2020 - Present",
      location: "San Francisco, CA",
      description: "Leading the development of cloud-native applications and mentoring junior developers.",
      achievements: [
        "Led the migration of legacy systems to microservices architecture, reducing deployment time by 70%",
        "Implemented CI/CD pipelines that reduced deployment errors by 85%",
        "Mentored 5 junior developers who were promoted to mid-level positions"
      ]
    },
    {
      company: "TechStart Solutions",
      position: "Full Stack Developer",
      period: "2018 - 2020",
      location: "San Francisco, CA",
      description: "Developed and maintained multiple client projects using modern web technologies.",
      achievements: [
        "Built and launched 3 major client projects with 99.9% uptime",
        "Reduced application load time by 60% through optimization",
        "Implemented automated testing that caught 95% of bugs before production"
      ]
    },
    {
      company: "DevTools SaaS",
      position: "Founder & Lead Developer",
      period: "2016 - 2018",
      location: "Remote",
      description: "Founded and developed a SaaS platform for developer productivity tools.",
      achievements: [
        "Grew user base to 10,000+ active developers",
        "Achieved $500K ARR within first year",
        "Featured in multiple tech publications for innovative approach"
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