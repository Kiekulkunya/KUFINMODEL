import React, { useState, useCallback } from 'react';
import { generateMockData, convertToCSV, downloadCSV } from '../services/dataService';

export const DownloadSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleDownload = useCallback(() => {
    setIsLoading(true);
    setStatusMessage('Generating mock financial data... This may take a moment.');

    // Simulate network delay and processing time
    setTimeout(() => {
      try {
        setStatusMessage('Compiling data into CSV format...');
        const mockData = generateMockData();
        const csvString = convertToCSV(mockData);
        
        setStatusMessage('Download starting...');
        downloadCSV(csvString, 'set100_financial_data_2000_present.csv');
        
        setStatusMessage('Success! Your CSV file has been downloaded.');
      } catch (error) {
        console.error("Failed to generate or download data:", error);
        setStatusMessage('An error occurred. Please try again.');
      } finally {
        setTimeout(() => {
            setIsLoading(false);
            setStatusMessage('');
        }, 3000); // Keep success/error message for a few seconds
      }
    }, 1500); // 1.5 second simulation
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl text-center">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Get Your Simulated Dataset</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Click the button below to generate and download a comprehensive mock dataset. This dataset includes the key financial ratios for all SET100 stocks, with quarterly data spanning from Q1 2000 to the present.
        </p>
        <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200 p-4 rounded-md mb-6 text-left">
          <p className="font-bold">Disclaimer:</p>
          <p>The generated data is for academic and modeling purposes only. It uses randomized values within realistic ranges and does not represent actual market data.</p>
        </div>
        <button
          onClick={handleDownload}
          disabled={isLoading}
          className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-400 dark:disabled:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg disabled:cursor-not-allowed flex items-center justify-center mx-auto"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
             'Generate & Download Mock Data (.csv)'
          )}
        </button>
        {statusMessage && (
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 h-5">
                {statusMessage}
            </p>
        )}
      </div>
    </div>
  );
};