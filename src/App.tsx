import React, { useState, useEffect } from 'react';
import { UserCircle2, Briefcase, FolderKanban, Mail, Code, Rocket, Award, Terminal, Brain, Coffee } from 'lucide-react';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function NavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive?: boolean }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`transition-colors duration-200 ${
        isActive 
          ? 'text-blue-400' 
          : 'text-gray-300 hover:text-blue-400'
      }`}
    >
      {children}
    </a>
  );
}

function NavCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = href.replace('#/', '');
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center hover:scale-105 hover:rotate-[360deg]"
    >
      <div className="text-blue-400 mb-4 transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </a>
  );
}

function QuickCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = href.replace('#/', '');
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="group block bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 transition-all duration-500 hover:bg-gray-700/50 hover:scale-105 hover:shadow-2xl"
    >
      <div className="flex items-start space-x-4">
        <div className="text-blue-400 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
          {icon}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-100 mb-1">{title}</h4>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Function to handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/';
      setCurrentPath(hash);
    };

    // Set initial path
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Render different components based on the path
  switch (currentPath) {
    case 'about':
      return <About />;
    case 'projects':
      return <Projects />;
    case 'experience':
      return <Experience />;
    case 'contact':
      return <Contact />;
    default:
      return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
          {/* Navigation */}
          <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-gray-100">NJ van As</span>
                <div className="hidden sm:flex space-x-6">
                  <NavLink href="#about" isActive={currentPath === 'about'}>About</NavLink>
                  <NavLink href="#projects" isActive={currentPath === 'projects'}>Projects</NavLink>
                  <NavLink href="#experience" isActive={currentPath === 'experience'}>Experience</NavLink>
                  <NavLink href="#contact" isActive={currentPath === 'contact'}>Contact</NavLink>
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
                Driven IT professional with more than a decade of experience in managing complex IT infrastructures and enhancing security protocols. Specializing in identity and access management, hybrid cloud environments, and workflow optimization, I am passionate about delivering secure, scalable, and efficient solutions to meet evolving business needs.
              </p>
            </div>

            {/* Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <NavCard
                icon={<UserCircle2 className="w-8 h-8" />}
                title="About Me"
                description="Journey, values, and professional philosophy"
                href="#/about"
              />
              <NavCard
                icon={<FolderKanban className="w-8 h-8" />}
                title="Projects"
                description="Showcase of impactful technical work"
                href="#/projects"
              />
              <NavCard
                icon={<Briefcase className="w-8 h-8" />}
                title="Experience"
                description="Professional growth and achievements"
                href="#/experience"
              />
              <NavCard
                icon={<Mail className="w-8 h-8" />}
                title="Contact Me"
                description="Let's connect and collaborate"
                href="#/contact"
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
                      icon={<Brain className="w-6 h-6" />}
                      title="This Website"
                      description="Static Front-End website"
                      href="#/projects"
                    />
                    <QuickCard
                      icon={<Terminal className="w-6 h-6" />}
                      title="Auto Office Install Tool"
                      description="Automated Microsoft Office deployment"
                      href="https://njvanas.github.io/Office-Auto-Install/"
                    />
                    <QuickCard
                      icon={<Rocket className="w-6 h-6" />}
                      title="Maintenance Tool"
                      description="Built with Python"
                      href="#/projects"
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
                      icon={<Award className="w-6 h-6" />}
                      title="IT Coordinator/Manager"
                      description="Managed IT operations, budgets, and hybrid environments at Unique Hydra & Gist"
                      href="#/experience"
                    />
                    <QuickCard
                      icon={<Terminal className="w-6 h-6" />}
                      title="User Authentication and Authorization Specialist"
                      description="Authentication and Authorization Specialist at Quion"
                      href="#/experience"
                    />
                    <QuickCard
                      icon={<Coffee className="w-6 h-6" />}
                      title="Startup Founder"
                      description="E-commerce business that operated on Wordpress, C-Panel & Shopify."
                      href="#/experience"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
  }
}

export default App;