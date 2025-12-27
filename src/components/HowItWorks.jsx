import React from 'react';
import { MousePointerClick, Wallet, Coins, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MousePointerClick,
      step: "01",
      title: "Select a Vault",
      desc: "Choose a strategy that fits your risk profile. We offer 'Blue-Chip' (Safe) or 'DeFi Degen' (High Risk/High Reward) indices."
    },
    {
      icon: Wallet,
      step: "02",
      title: "Deposit Assets",
      desc: "Connect your wallet and deposit using Stablecoins (USDC/USDT) or native tokens. No lock-up periods, ever."
    },
    {
      icon: Coins,
      step: "03",
      title: "Sit Back & Earn",
      desc: "Our smart contract works 24/7 to rebalance your portfolio and farm yields. Withdraw your funds + profit anytime."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl font-bold text-white">How It Works</h2>
          <p className="mt-4 text-slate-400">No email registration, no KYC. Pure DeFi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-slate-800 via-indigo-900 to-slate-800 border-t border-slate-700 border-dashed z-0"></div>

          {steps.map((item, index) => (
            <div key={index} className="relative z-10 bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-all hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 mx-auto border border-slate-800 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors shadow-lg relative">
                <item.icon className="h-7 w-7 text-indigo-400" />
              </div>

              <div className="absolute top-4 right-6 text-5xl font-black text-slate-800/30 select-none font-mono">
                {item.step}
              </div>

              <h3 className="text-xl font-bold text-white text-center mb-3">{item.title}</h3>
              <p className="text-slate-400 text-center text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-16 text-center z-10 relative">
           <p className="text-slate-500 text-sm mb-4">Ready to optimize your holdings?</p>
           <button className="text-indigo-400 font-bold hover:text-indigo-300 flex items-center justify-center gap-2 mx-auto hover:underline decoration-2 underline-offset-4">
             View all available Vaults <ArrowRight className="w-4 h-4"/>
           </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
