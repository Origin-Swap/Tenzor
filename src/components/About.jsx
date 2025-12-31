import React from "react"
import { Layers, TrendingUp, Zap } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="md:py-28 py-14 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — IMAGE / VISUAL */}
        {/* LEFT — IMAGE / VISUAL */}
        <div className="relative">

          {/* soft blue glow */}
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.35),transparent_60%)] blur-3xl opacity-70"></div>

          {/* cyan secondary glow */}
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.25),transparent_65%)] blur-3xl"></div>

          {/* image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/images/about2.png"
              alt="TENZOR AI DeFi"
              className="w-full h-full object-cover"
            />
          </div>

        </div>


        {/* RIGHT — CONTENT */}
        <div>
          <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3">
            The Inefficiency
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Let Your Blue-Chips Sleep?
          </h3>
          <p className="text-slate-200 text-md mb-10">
            Buying Bitcoin or Ethereum is smart. Letting it sit in a wallet earning 0% is lazy.
            <br className="hidden md:block" />
            TENZOR solves the <span className="text-indigo-400 font-semibold">"Lazy Capital"</span> problem by making your portfolio productive.
          </p>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                <Layers className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Smart Indexing
                </h4>
                <p className="text-slate-200 text-sm leading-relaxed">
                  We bundle top 10 assets by market cap and rebalance monthly to always capture market winners.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/40">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Yield-Bearing Index
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Your index assets are deployed into Aave & Compound to earn
                  <span className="text-emerald-400 font-semibold"> extra APY</span> on top of market growth.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Gasless Auto-Compound
                </h4>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Smart contracts auto-harvest & reinvest yield so you never waste gas on manual claims.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
