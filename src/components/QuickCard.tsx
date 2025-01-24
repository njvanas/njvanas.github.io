import React from 'react';

interface QuickCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const QuickCard: React.FC<QuickCardProps> = ({ icon, title, description, href }) => {
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
};

export default QuickCard;
