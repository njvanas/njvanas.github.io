import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPath: string;
}

function Breadcrumbs({ currentPath }: BreadcrumbsProps) {
  const pathMap: Record<string, string> = {
    '': 'Home',
    'about': 'About Me',
    'projects': 'Projects',
    'experience': 'Experience',
    'insights': 'Insights',
    'contact': 'Contact',
  };

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = href;
  };

  if (!currentPath || currentPath === '') return null;

  return (
    <nav className="container-custom py-4" aria-label="Breadcrumb">
      <div className="flex items-center space-x-2 text-sm cyber-text-muted">
        <a
          href="#"
          onClick={handleNavClick('')}
          className="flex items-center hover:text-cyber-primary transition-colors duration-200"
        >
          <Home className="w-4 h-4 mr-1" />
          Home
        </a>
        <ChevronRight className="w-4 h-4" />
        <span className="cyber-text font-medium">{pathMap[currentPath]}</span>
      </div>
    </nav>
  );
}

export default Breadcrumbs;