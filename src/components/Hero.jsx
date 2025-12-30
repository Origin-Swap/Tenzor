import React from 'react'
import { ArrowRight, Mail, TrendingUp } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative md:px-14 pt-24 pb-20 lg:pt-28 lg:pb-32 overflow-hidden bg-slate-950">

      {/* Background Gradients */}


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-14 gap-8 items-center">

          {/* ================= TEXT ================= */}
          <div className="text-center lg:text-left order-1">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Index the Market.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
                Farm the Yield.
              </span>
            </h1>

            {/* Description */}
            <p className="md:text-lg text-sm text-slate-400 max-w-xl mx-auto lg:mx-0 mb-4">
              Diversified index exposure that actively earns yield through DeFi.
              <span className="block text-white font-medium mt-2">
                Hold smart. Earn harder.
              </span>
            </p>

            {/* Desktop CTA */}
            <div className="hidden lg:block max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-600/20 transition-all"
                >
                  Start Tokenization
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="/docs"
                  className="flex items-center justify-center px-6 py-2 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition-all"
                >
                  Read Docs
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mt-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-emerald-500" />
                  Live on Testnet
                </span>
                <span>•</span>
                <span>No Wallet Required</span>
              </div>
            </div>

          </div>

          {/* ================= IMAGE ================= */}
          <div className="relative flex justify-center order-2">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-indigo-600/40 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px]" />
          </div>
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden">
              <img
                src="/images/heroo.png"
                alt="Product Preview"
                className="w-full md:h-full h-60 object-contain"
              />
            </div>
          </div>

          {/* ================= MOBILE CTA (AFTER IMAGE) ================= */}
          <div className="order-3 lg:hidden max-w-md mx-auto w-full">
            <div className="flex flex-col gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-600/20 transition-all"
              >
                Start Tokenization
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="/docs"
                className="flex items-center justify-center px-6 py-4 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition-all"
              >
                Read Docs
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-emerald-500" />
                Live on Testnet
              </span>
              <span>•</span>
              <span>No Wallet Required</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
