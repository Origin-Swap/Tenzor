import React from 'react';
import { ArrowRight, ChevronRight, Mail, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">

      {/* Background Gradients - Sedikit diperkuat */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge - Lebih spesifik "Public Alpha" terdengar lebih eksklusif */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 backdrop-blur-sm mb-8 hover:border-indigo-500/50 transition-colors cursor-default">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-slate-300 text-xs font-bold uppercase tracking-wide">Waitlist Filling Fast</span>
        </div>

        {/* Main Headline - USP SHARPENED */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
          Index the Market. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
            Farm the Yield. Simultaneously.
          </span>
        </h1>

        {/* Subheadline - Menjelaskan "HOW" dan "WHY" dalam satu kalimat */}
        <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The first protocol that puts your index portfolio to work.
          Get the diversification of an ETF, plus the high APY of DeFi farming.
          <span className="text-white font-medium block mt-2">Don't imply hold. Multiply.</span>
        </p>

        {/* Email Capture Form */}
        <div className="max-w-md mx-auto mb-8">
          <form className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="email"
                className="block w-full pl-10 pr-3 py-4 border border-slate-700 rounded-xl leading-5 bg-slate-900/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
                placeholder="Enter email for early access"
              />
            </div>
            <button type="button" className="px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-600/20 whitespace-nowrap flex items-center justify-center gap-2">
              Join Waitlist <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-slate-500">
            <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3 text-emerald-500"/> 2,400+ Joined</span>
            <span>•</span>
            <span>No Spam</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
