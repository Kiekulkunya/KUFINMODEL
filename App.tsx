import React from 'react';
import { Header } from './components/Header';
import { InfoCard } from './components/InfoCard';
import { DownloadSection } from './components/DownloadSection';
import { FINANCIAL_RATIOS, BUSINESS_STATEMENT, RESEARCH_IMPLICATIONS, ECONOMIC_INDICATORS } from './constants';
import { FinancialRatio } from './types';

const App: React.FC = () => {

  const groupedRatios = FINANCIAL_RATIOS.reduce((acc, ratio) => {
    (acc[ratio.category] = acc[ratio.category] || []).push(ratio);
    return acc;
  }, {} as Record<string, FinancialRatio[]>);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8 space-y-16">
        
        {/* --- Section 1: Strategic Focus --- */}
        <section id="strategy">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-cyan-500 pl-4">
            The 'Why': Strategic Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard
              title="Business Statement"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              content={BUSINESS_STATEMENT}
            />
            <InfoCard
              title="Research Implications"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              content={RESEARCH_IMPLICATIONS}
            />
          </div>
        </section>

        {/* --- Section 2: Key Ratios --- */}
        <section id="ratios">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8 border-l-4 border-cyan-500 pl-4">
            Key Financial Ratios for the Thai Market
          </h2>
          <div className="space-y-10">
            {Object.entries(groupedRatios).map(([category, ratios]) => (
              <div key={category}>
                <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-4">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ratios.map((ratio) => (
                    <div key={ratio.key} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-cyan-500 border-2 border-transparent transition-all duration-300">
                      <h4 className="font-bold text-xl text-cyan-600 dark:text-cyan-400 mb-2">{ratio.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">{ratio.description}</p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs italic border-t border-gray-200 dark:border-gray-700 pt-2">
                        <span className="font-semibold">Justification:</span> {ratio.justification}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* --- Section 3: Economic Indicators --- */}
        <section id="indicators">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-cyan-500 pl-4">
            Key Economic Indicators
          </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ECONOMIC_INDICATORS.map((indicator) => (
              <div key={indicator.name} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-xl text-cyan-600 dark:text-cyan-400 mb-2">{indicator.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">{indicator.relevance}</p>
                 <p className="text-gray-500 dark:text-gray-500 text-xs italic border-t border-gray-200 dark:border-gray-700 pt-2">
                    <span className="font-semibold">Source(s):</span> {indicator.sources}
                  </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Section 4: Data Download --- */}
        <section id="download">
           <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-cyan-500 pl-4">
            Simulate Data Download
          </h2>
          <DownloadSection />
        </section>

      </main>
       <footer className="text-center p-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>Built for Financial Modeling Professionals | Data is simulated for analytical purposes.</p>
      </footer>
    </div>
  );
};

export default App;