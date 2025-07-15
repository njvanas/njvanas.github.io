import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { experiences } from '../data/experiences';
import { projects } from '../data/projects';
import { slugify } from '../utils/slug';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experienceLinks = experiences.map((exp) => ({
    href: `#${slugify(exp.title)}`,
    label: exp.title,
  }));

  const projectLinks = projects.map((proj) => ({
    href: `#${slugify(proj.title)}`,
    label: proj.title,
  }));

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience', links: experienceLinks },
    { href: '#projects', label: 'Projects', links: projectLinks },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            NJ van As
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center"
                >
                  {item.label}
                  {item.links && <ChevronDown className="w-4 h-4 ml-1" />}
                </a>
                {item.links && (
                  <div className="absolute left-0 mt-2 bg-slate-800/90 backdrop-blur-sm rounded shadow-lg py-2 hidden group-hover:block">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-1 text-sm text-gray-300 whitespace-nowrap hover:bg-slate-700 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.href} className="flex flex-col">
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.links && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="text-sm text-gray-300 hover:text-white"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
