import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
            <svg className="w-10 h-10 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
            <h1 className="text-xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                Thai SET100 Financial Analytics - Simulation
            </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
            <a href="#strategy" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Strategy</a>
            <a href="#ratios" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Ratios</a>
            <a href="#indicators" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Indicators</a>
            <a href="#download" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Download</a>
        </nav>
      </div>
    </header>
  );
};