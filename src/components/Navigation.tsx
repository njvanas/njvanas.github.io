import React, { useState } from 'react';
import { UserCircle2, Briefcase, FolderKanban, Mail, Home, BookOpen, Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavigationProps {
  currentPath: string;
}

function Navigation({ currentPath }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 glass-dark border-b border-cyber-primary/20 backdrop-blur-lg">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <a 
            href="#" 
            onClick={handleNavClick('')}
            className="focus:outline-none focus:ring-2 focus:ring-cyber-primary focus:ring-offset-2 focus:ring-offset-cyber-dark rounded-lg"
            aria-label="NJ van As - Home"
          >
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={handleNavClick(href)}
                className={`nav-link ${currentPath === href ? 'active' : ''}`}
                aria-current={currentPath === href ? 'page' : undefined}
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
            className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-primary"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 cyber-text" />
            ) : (
              <Menu className="w-6 h-6 cyber-text" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-2">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={handleNavClick(href)}
                className={`nav-link p-3 rounded-lg glass hover:bg-white/10 transition-colors ${
                  currentPath === href ? 'active bg-white/5' : ''
                }`}
                aria-current={currentPath === href ? 'page' : undefined}
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