import React from 'react';
import { Target, Zap, TrendingUp, Layers } from 'lucide-react';

const About = () => {
  return (
    <section id="vision" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-2">The Inefficiency</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Let Your Blue-Chips Sleep?</h3>
          <p className="text-slate-400 text-lg">
            Buying Bitcoin or Ethereum is smart. Letting it sit in a wallet earning 0% is lazy.
            <br className="hidden md:block"/>
            IndexFi solves the "Lazy Capital" problem by making your portfolio productive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* USP 1: Diversifikasi Cerdas */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
              <Layers className="h-6 w-6 text-indigo-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Smart Indexing</h4>
            <p className="text-slate-400 leading-relaxed text-sm">
              We bundle top 10 assets by market cap. Our algorithms automatically rebalance your portfolio monthly to capture market winners.
            </p>
          </div>

          {/* USP 2: THE CORE DIFFERENTIATOR (Yield on Index) */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-900/20 to-slate-900 border border-indigo-500/30 hover:border-indigo-500/60 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-indigo-900/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 bg-indigo-500/20 rounded-bl-xl">
               <span className="text-indigo-300 text-[10px] font-bold uppercase tracking-wider">Star Feature</span>
            </div>
            <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-6 shadow-indigo-500/50 shadow-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Yield-Bearing Index</h4>
            <p className="text-slate-300 leading-relaxed text-sm">
              Unlike traditional ETFs, underlying assets aren't locked in a vault. They are routed to Aave & Compound to earn <span className="text-emerald-400 font-bold">extra APY</span> on top of market growth.
            </p>
          </div>

          {/* USP 3: Efisiensi Biaya */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
              <Zap className="h-6 w-6 text-emerald-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Gasless Auto-Compound</h4>
            <p className="text-slate-400 leading-relaxed text-sm">
              Stop claiming rewards manually. Our smart contracts auto-harvest yields and reinvest them, saving you hundreds in gas fees every year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
