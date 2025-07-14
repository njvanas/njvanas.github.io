import React, { useState, useEffect } from 'react';
import { UserCircle2, Briefcase, FolderKanban, Mail, Code, Rocket, Award, Terminal, Brain, Coffee, Shield, Lock, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from './components/Navigation';
import TestimonialSection from './components/TestimonialSection';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Insights from './pages/Insights';

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
      className="card-interactive group"
    >
      <div className="cyber-primary mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        {icon}
      </div>
      <h3 className="text-xl font-semibold cyber-text mb-2 group-hover:text-gradient transition-colors duration-300">
        {title}
      </h3>
      <p className="cyber-text-muted leading-relaxed">{description}</p>
    </a>
  );
}

function QuickCard({
  icon,
  title,
  description,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  external?: boolean;
}) {
  const handleClick = (e: React.MouseEvent) => {
    if (!external) {
      e.preventDefault();
      window.location.hash = href.replace('#/', '');
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block glass rounded-lg p-6 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:border-cyber-primary/30"
    >
      <div className="flex items-start space-x-4">
        <div className="cyber-primary transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold cyber-text mb-2 group-hover:text-gradient transition-colors duration-300">
            {title}
          </h4>
          <p className="cyber-text-muted text-sm leading-relaxed">{description}</p>
        </div>
        {external && (
          <ArrowRight className="w-4 h-4 cyber-text-muted group-hover:cyber-primary transition-colors duration-300" />
        )}
      </div>
    </a>
  );
}

function ValueProposition() {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security-First Approach",
      description: "Every solution designed with cybersecurity principles at its core"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Proven Results",
      description: "Track record of reducing security incidents by 90% and improving efficiency by 40%"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Continuous Innovation",
      description: "Staying ahead of emerging threats with cutting-edge identity management solutions"
    }
  ];

  return (
    <section className="section-padding bg-cyber-light/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-6">Why Choose My Expertise</h2>
          <p className="text-responsive-lg cyber-text-muted max-w-3xl mx-auto leading-relaxed">
            Combining deep technical knowledge with practical implementation experience to deliver 
            cybersecurity solutions that protect your organization while enabling business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="cyber-primary mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold cyber-text mb-3">{value.title}</h3>
              <p className="cyber-text-muted leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '';
      setCurrentPath(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

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
    case 'insights':
      return <Insights />;
    default:
      return (
        <div className="min-h-screen bg-gradient-cyber">
          <Navigation currentPath={currentPath} />

          {/* Hero Section */}
          <main className="container-custom section-padding">
            <div className="text-center mb-20 animate-fade-in">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
                  <div className="w-2 h-2 bg-cyber-success rounded-full animate-pulse"></div>
                  <span className="text-sm cyber-text-muted font-medium">Available for new opportunities</span>
                </div>
                
                <h1 className="text-gradient mb-6 animate-slide-up">
                  Cybersecurity & Identity Management Expert
                </h1>
                
                <p className="text-responsive-xl cyber-text-muted max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Driven IT professional with <strong className="cyber-primary">more than a decade of experience</strong> in 
                  managing complex IT infrastructures and enhancing security protocols. Specializing in identity and access 
                  management, hybrid cloud environments, and workflow optimization to deliver secure, scalable, and efficient 
                  solutions that meet evolving business needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <button 
                  onClick={() => window.location.hash = 'projects'}
                  className="btn-primary"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => window.location.hash = 'contact'}
                  className="btn-secondary"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <NavCard
                  icon={<UserCircle2 className="w-8 h-8" />}
                  title="About Me"
                  description="Journey, values, and professional philosophy in cybersecurity"
                  href="#/about"
                />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <NavCard
                  icon={<FolderKanban className="w-8 h-8" />}
                  title="Projects"
                  description="Showcase of impactful technical work and security solutions"
                  href="#/projects"
                />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <NavCard
                  icon={<Briefcase className="w-8 h-8" />}
                  title="Experience"
                  description="Professional growth and achievements in IT security"
                  href="#/experience"
                />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <NavCard
                  icon={<Mail className="w-8 h-8" />}
                  title="Contact Me"
                  description="Let's connect and collaborate on security initiatives"
                  href="#/contact"
                />
              </div>
            </div>

            {/* Value Proposition */}
            <ValueProposition />

            {/* Quick Access Section */}
            <div className="section-padding">
              <h2 className="text-3xl font-bold cyber-text text-center mb-16">
                Featured Highlights
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Projects Quick Access */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold cyber-text mb-8 flex items-center">
                    <Code className="w-6 h-6 mr-3 cyber-primary" />
                    Featured Projects
                  </h3>
                  <div className="space-y-4">
                    <QuickCard
                      icon={<Brain className="w-6 h-6" />}
                      title="This Portfolio Website"
                      description="Modern React-based portfolio showcasing cybersecurity expertise with responsive design and accessibility features"
                      href="#/projects"
                    />
                    <QuickCard
                      icon={<Terminal className="w-6 h-6" />}
                      title="Auto Office Install Tool"
                      description="Automated Microsoft Office deployment solution with PowerShell automation and configuration management"
                      href="https://njvanas.github.io/Office-Auto-Install/"
                      external
                    />
                    <QuickCard
                      icon={<Rocket className="w-6 h-6" />}
                      title="AIO Maintenance Tool"
                      description="Comprehensive Python-based maintenance utility for system optimization and security hardening"
                      href="#/projects"
                    />
                  </div>
                </div>

                {/* Experience Quick Access */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold cyber-text mb-8 flex items-center">
                    <Award className="w-6 h-6 mr-3 cyber-primary" />
                    Key Experience
                  </h3>
                  <div className="space-y-4">
                    <QuickCard
                      icon={<Shield className="w-6 h-6" />}
                      title="Workspace Administrator"
                      description="Leading Azure-based identity solutions and cloud-first initiatives at Quion Groep with focus on compliance and security"
                      href="#/experience"
                    />
                    <QuickCard
                      icon={<Lock className="w-6 h-6" />}
                      title="Authentication Specialist"
                      description="Designed and implemented secure RBAC policies and automated identity lifecycle processes, improving efficiency by 40%"
                      href="#/experience"
                    />
                    <QuickCard
                      icon={<Coffee className="w-6 h-6" />}
                      title="IT Coordinator/Manager"
                      description="Managed hybrid IT environments, Sophos firewall systems, and achieved significant cost savings in procurement"
                      href="#/experience"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <TestimonialSection />

            {/* Call to Action */}
            <div className="text-center section-padding">
              <div className="glass rounded-2xl p-12 animate-fade-in">
                <h2 className="text-3xl font-bold cyber-text mb-6">Ready to Enhance Your Security Posture?</h2>
                <p className="text-xl cyber-text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
                  Let's discuss how my expertise in cybersecurity and identity management can help protect 
                  and optimize your organization's IT infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => window.location.hash = 'contact'}
                    className="btn-primary"
                  >
                    Start a Conversation
                  </button>
                  <button 
                    onClick={() => window.location.hash = 'insights'}
                    className="btn-secondary"
                  >
                    Read My Insights
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
  }
}

export default App;