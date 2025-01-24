import React from 'react';

interface NavCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const NavCard: React.FC<NavCardProps> = ({ icon, title, description, href }) => {
  return (
    <a
      href={href}
      className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center hover:scale-105"
    >
      <div className="text-blue-400 mb-4 transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </a>
  );
};

export default NavCard;
