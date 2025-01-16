import React from 'react';
import { UserCircle2, Briefcase, FolderKanban, Mail, Code, Rocket, Award, Terminal, Brain, Coffee } from 'lucide-react';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
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
  return (
    <a
      href={href}
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
  return (
    <a
      href={href}
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
  // Get the current hash without the '#' symbol
  const currentPath = window.location.hash.slice(1) || '/';
  
  // Render different components based on the path
  switch (currentPath) {
    case '/about':
      return <About />;
    case '/projects':
      return <Projects />;
    case '/experience':
      return <Experience />;
    case '/contact':
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
                  <NavLink href="#/about">About</NavLink>
                  <NavLink href="#/projects">Projects</NavLink>
                  <NavLink href="#/experience">Experience</NavLink>
                  <NavLink href="#/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6">
                IT Specialist & Access Management Professional
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Highly skilled IT professional with expertise in system administration, user authentication, and infrastructure optimization.
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
                      icon={<Rocket className="w-6 h-6" />}
                      title="Authentication Protocol Integration"
                      description="Designed and deployed enterprise-level SSO and MFA solutions for enhanced security and user experience."
                      href="#/projects"
                    />
                    <QuickCard
                      icon={<Brain className="w-6 h-6" />}
                      title="IT Workflow Automation"
                      description="Optimized identity lifecycle processes by automating user provisioning, access reviews, and deprovisioning."
                      href="#/projects"
                    />
					<QuickCard
                      icon={<Brain className="w-6 h-6" />}
                      title="Hybrid Cloud Implementation"
                      description="Migrated legacy systems to Azure AD and implemented hybrid IT environments for scalability and performance."
                      href="#/projects"
                    />
					<QuickCard
                      icon={<Brain className="w-6 h-6" />}
                      title="Compliance Enhancement"
                      description="Integrated ISO 27001 and SOC2 controls into IT systems, ensuring regulatory compliance and robust security."
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
                      icon={<Terminal className="w-6 h-6" />}
                      title="User Authentication Specialist"
                      description="Streamlined enterprise authentication systems by implementing SSO, MFA, and RBAC, ensuring compliance with GDPR and ISO 27001 standards."
                      href="#/experience"
                    />
                    <QuickCard
                      icon={<Coffee className="w-6 h-6" />}
                      title="IT Infrastructure Manager"
                      description="Oversaw hybrid IT environments, managing Azure AD, Office 365, and Hyper-V, while optimizing workflows for better efficiency."
                      href="#/experience"
                    />
					<QuickCard
                      icon={<Coffee className="w-6 h-6" />}
                      title="Systems Administrator"
                      description="Managed network servers, automated DevOps deployments, and enhanced system reliability with robust backup solutions."
                      href="#/experience"
                    />
					<QuickCard
                      icon={<Coffee className="w-6 h-6" />}
                      title="IT Coordinator"
                      description="Led IT teams to improve operational processes, including user onboarding workflows and inventory management."
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