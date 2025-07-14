import React from 'react';
import { UserCircle2, Briefcase, FolderKanban, Mail, Home, BookOpen } from 'lucide-react';

interface NavigationProps {
  currentPath: string;
}

function Navigation({ currentPath }: NavigationProps) {
  const navItems = [
    { href: '', label: 'Home', icon: Home },
    { href: 'about', label: 'About', icon: UserCircle2 },
    { href: 'projects', label: 'Projects', icon: FolderKanban },
    { href: 'experience', label: 'Experience', icon: Briefcase },
    { href: 'insights', label: 'Insights', icon: BookOpen },
    { href: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <nav className="sticky top-0 z-50 glass-dark border-b border-cyber-primary/20">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <a 
            href="#" 
            onClick={handleNavClick('')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-lg flex items-center justify-center font-mono font-bold text-cyber-dark group-hover:scale-110 transition-transform duration-300">
              NJ
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold cyber-text">NJ van As</div>
              <div className="text-xs cyber-text-muted font-mono">Cybersecurity Specialist</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={handleNavClick(href)}
                className={`nav-link ${currentPath === href ? 'active' : ''}`}
              >
                <span className="flex items-center space-x-2">
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              mobileMenu?.classList.toggle('hidden');
            }}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6 cyber-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={(e) => {
                  handleNavClick(href)(e);
                  document.getElementById('mobile-menu')?.classList.add('hidden');
                }}
                className={`nav-link p-3 rounded-lg glass hover:bg-white/10 transition-colors ${
                  currentPath === href ? 'active bg-white/5' : ''
                }`}
              >
                <span className="flex items-center space-x-3">
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;