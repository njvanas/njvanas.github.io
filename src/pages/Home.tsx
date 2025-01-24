import React from 'react';
import { NavLink, NavCard, QuickCard } from './src/components'; // Import these if they are reusable components
import { UserCircle2, FolderKanban, Briefcase, Mail, Code, Rocket, Award, Terminal, Brain, Coffee } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-gray-100">NJ van As</span>
            <div className="hidden sm:flex space-x-6">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/experience">Experience</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6">
            Cybersecurity and IT Infrastructure Specialist | Identity & Access Management Expert
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Driven IT professional with over 8 years of experience...
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <NavCard icon={<UserCircle2 />} title="About Me" description="Journey, values, and philosophy" href="/about" />
          <NavCard icon={<FolderKanban />} title="Projects" description="Impactful technical work" href="/projects" />
          <NavCard icon={<Briefcase />} title="Experience" description="Achievements" href="/experience" />
          <NavCard icon={<Mail />} title="Contact Me" description="Let's collaborate" href="/contact" />
        </div>
      </main>
    </div>
  );
};

export default Home;
