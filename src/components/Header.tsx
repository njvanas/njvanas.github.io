import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import experiences from '../data/experiences';
import projects from '../data/projects';
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

  const navItems = [
    { href: '#about', label: 'About' },
    {
      href: '#experience',
      label: 'Experience',
      subItems: experiences.map((exp) => ({
        href: `#${slugify(exp.title)}`,
        label: exp.title,
      })),
    },
    {
      href: '#projects',
      label: 'Projects',
      subItems: projects.map((proj) => ({
        href: `#${slugify(proj.title)}`,
        label: proj.title,
      })),
    },
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
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
                {item.subItems && (
                  <div className="absolute left-0 top-full hidden group-hover:block bg-slate-800 rounded shadow-lg">
                    {item.subItems.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white whitespace-nowrap"
                      >
                        {sub.label}
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
                  {item.subItems && (
                    <div className="flex flex-col ml-4 mt-2 space-y-2">
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          className="text-gray-400 hover:text-white text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.label}
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
