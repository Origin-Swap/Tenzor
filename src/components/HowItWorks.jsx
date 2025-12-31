import React from "react"
import { MousePointerClick, Wallet, Coins, ArrowRight } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      icon: MousePointerClick,
      step: "01",
      title: "Select a Vault",
      desc: "Choose a strategy that fits your risk profile. We offer 'Blue-Chip' (Safe) or 'DeFi Degen' (High Risk/High Reward) indices.",
    },
    {
      icon: Wallet,
      step: "02",
      title: "Deposit Assets",
      desc: "Connect your wallet and deposit using Stablecoins (USDC/USDT) or native tokens. No lock-up periods, ever.",
    },
    {
      icon: Coins,
      step: "03",
      title: "Sit Back & Earn",
      desc: "Our smart contract works 24/7 to rebalance your portfolio and farm yields. Withdraw your funds + profit anytime.",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="relative py-28 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden"
    >
      {/* blue glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.18),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.15),transparent_65%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How It Works
          </h2>
          <p className="mt-4 text-slate-400">
            No email registration, no KYC. Pure DeFi.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Neon connecting line */}
          <div className="hidden md:block absolute top-16 left-[18%] right-[18%] h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-[1px] opacity-80 z-0"></div>
          <div className="hidden md:block absolute top-16 left-[18%] right-[18%] h-6 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent blur-2xl z-0"></div>

          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/40 transition-all hover:-translate-y-2 group"
            >
              {/* Card glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

              {/* Icon */}
              <div className="relative w-14 h-14 mx-auto mb-6 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 shadow-lg">
                <item.icon className="w-7 h-7 text-indigo-400" />
              </div>

              {/* Step Number */}
              <div className="absolute top-4 right-6 text-5xl font-black text-indigo-500/10 select-none font-mono">
                {item.step}
              </div>

              <h3 className="relative text-xl font-bold text-white text-center mb-3">
                {item.title}
              </h3>
              <p className="relative text-slate-400 text-center text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Ready to optimize your holdings?
          </p>
          <button className="text-indigo-400 font-semibold flex items-center justify-center gap-2 mx-auto hover:text-indigo-300 transition">
            View all available Vaults <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
