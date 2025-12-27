import React from 'react';
// Note: You would typically import actual SVG logos here.
// Using text placeholders for code clarity.

const TechStack = () => {
  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-8">
          Building on robust infrastructure
        </p>

        {/* Placeholder Logos - Replace with actual SVGs (Solana, Chainlink, The Graph, etc) */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xl font-bold text-white flex items-center gap-2"><div className="w-6 h-6 bg-slate-700 rounded-full"></div> Ethereum</span>
          <span className="text-xl font-bold text-white flex items-center gap-2"><div className="w-6 h-6 bg-slate-700 rounded-full"></div> Chainlink</span>
          <span className="text-xl font-bold text-white flex items-center gap-2"><div className="w-6 h-6 bg-slate-700 rounded-full"></div> The Graph</span>
          <span className="text-xl font-bold text-white flex items-center gap-2"><div className="w-6 h-6 bg-slate-700 rounded-full"></div> Aave V3</span>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
