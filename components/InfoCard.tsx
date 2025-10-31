import React from 'react';

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  content: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, icon, content }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-4 text-2xl font-bold text-gray-700 dark:text-gray-300">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {content}
      </p>
    </div>
  );
};