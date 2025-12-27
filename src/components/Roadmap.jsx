import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      quarter: "Q4 2025",
      title: "Concept & Whitepaper",
      status: "completed",
      items: ["Market Research", "Whitepaper V1 Release", "Community Building"]
    },
    {
      quarter: "Q1 2026",
      title: "Development Phase",
      status: "current",
      items: ["Smart Contract Development", "Private Alpha Testing", "Security Audit Partnership"]
    },
    {
      quarter: "Q2 2026",
      title: "Public Launch",
      status: "upcoming",
      items: ["Public Beta Launch", "Initial Index Offerings (IIO)", "Governance Token TGE"]
    },
    {
      quarter: "Q3 2026",
      title: "Expansion",
      status: "upcoming",
      items: ["Cross-chain Integration", "Mobile App Release", "DAO Governance Live"]
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Roadmap</h2>
          <p className="mt-4 text-slate-400">Our journey to redefine decentralized investing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className={`relative p-6 rounded-2xl border ${phase.status === 'current' ? 'bg-indigo-900/10 border-indigo-500/50 shadow-lg shadow-indigo-900/20' : 'bg-slate-900 border-slate-800 opacity-80'}`}>

              {/* Status Indicator */}
              <div className="flex justify-between items-center mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${phase.status === 'current' ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                  {phase.quarter}
                </span>
                {phase.status === 'completed' ? <CheckCircle2 className="w-5 h-5 text-emerald-500"/> :
                 phase.status === 'current' ? <Clock className="w-5 h-5 text-indigo-400 animate-pulse"/> :
                 <Circle className="w-5 h-5 text-slate-600"/>}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>

              <ul className="space-y-3">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
