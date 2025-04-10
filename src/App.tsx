import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserCircle2, Briefcase, FolderKanban, Mail, Code, Rocket, Award, Terminal, Brain, Coffee } from 'lucide-react';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/njvanas.github.io"> {/* Ensure the basename is set for GitHub Pages subpath */}
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
              Driven IT professional with over 8 years of experience in managing complex IT infrastructures and enhancing security protocols. Specializing in identity and access management, hybrid cloud environments, and workflow optimization, I am passionate about delivering secure, scalable, and efficient solutions to meet evolving business needs.
            </p>
          </div>

          {/* Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <NavCard
              icon={<UserCircle2 className="w-8 h-8" />}
              title="About Me"
              description="Journey, values, and professional philosophy"
              href="/about"
            />
            <NavCard
              icon={<FolderKanban className="w-8 h-8" />}
              title="Projects"
              description="Showcase of impactful technical work"
              href="/projects"
            />
            <NavCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Experience"
              description="Professional growth and achievements"
              href="/experience"
            />
            <NavCard
              icon={<Mail className="w-8 h-8" />}
              title="Contact Me"
              description="Let's connect and collaborate"
              href="/contact"
            />
          </div>

          {/* Quick Access Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-100 text-center mb-12">
              Featured Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Projects Quick Access */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-2" />
                  Featured Projects
                </h3>
                <div className="grid gap-4">
                  <QuickCard
                    icon={<Rocket className="w-6 h-6" />}
                    title="Maintenance Tool"
                    description="Built with Python"
                    href="/projects"
                  />
                  <QuickCard
                    icon={<Brain className="w-6 h-6" />}
                    title="This Website"
                    description="Static Front-End website"
                    href="/projects"
                  />
                </div>
              </div>

              {/* Experience Quick Access */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  Key Experience
                </h3>
                <div className="grid gap-4">
                  <QuickCard
                    icon={<Terminal className="w-6 h-6" />}
                    title="User Authentication and Authorization Specialist"
                    description="Authentication and Authorization Specialist at Quion"
                    href="/experience"
                  />
                  <QuickCard
                    icon={<Coffee className="w-6 h-6" />}
                    title="Startup Founder"
                    description="E-commerce business that operated on Wordpress, C-Panel & Shopify."
                    href="/experience"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<About />} /> {/* This is now the "Home" page */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
