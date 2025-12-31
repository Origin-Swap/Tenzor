import React from "react"

const tech = [
  { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
  { name: "Chainlink", logo: "https://cryptologos.cc/logos/chainlink-link-logo.svg" },
  { name: "The Graph", logo: "https://cryptologos.cc/logos/the-graph-grt-logo.svg" },
  { name: "Aave V3", logo: "https://cryptologos.cc/logos/aave-aave-logo.svg" },
]

const TechStack = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black border-y border-white/5">
      {/* soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(99,102,241,0.15),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl font-bold text-white">
            Built on Proven Web3 Infrastructure
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm">
            We leverage battle-tested decentralized protocols to ensure security, scalability, and sustainable yield.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tech.map((t, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur
                         hover:border-indigo-500/50 transition-all duration-300"
            >
              {/* glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-cyan-400/20
                              opacity-0 group-hover:opacity-100 blur-xl transition" />

              <div className="relative flex flex-col items-center justify-center gap-4">
                <img
                  src={t.logo}
                  alt={t.name}
                  className="h-12 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition"
                />
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
