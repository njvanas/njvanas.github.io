import React from 'react';
import { Heart, Mail, Linkedin, Github } from 'lucide-react';
import { handleExternalLink } from '../utils/security';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">NJ van As</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Cybersecurity & IT Infrastructure Specialist passionate about 
              securing digital environments and enabling technological innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:njvanas@duck.com"
                className="p-2 bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/njvanas"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  handleExternalLink('https://linkedin.com/in/njvanas');
                }}
                className="p-2 bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/njvanas"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  handleExternalLink('https://github.com/njvanas');
                }}
                className="p-2 bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-white font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Identity & Access Management</li>
              <li>Azure Security Solutions</li>
              <li>PowerShell Automation</li>
              <li>Cybersecurity Governance</li>
              <li>IT Infrastructure</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} NJ van As. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in the Netherlands
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;