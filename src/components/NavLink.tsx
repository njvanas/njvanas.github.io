// src/components/NavLink.tsx
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default NavLink;
