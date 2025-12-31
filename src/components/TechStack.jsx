import React from "react"

const tech = [
  { name: "BNB Chain", logo: "https://cryptologos.cc/logos/bnb-bnb-logo.svg" },
  { name: "Chainlink", logo: "https://cryptologos.cc/logos/chainlink-link-logo.svg" },
  { name: "The Graph", logo: "https://cryptologos.cc/logos/the-graph-grt-logo.svg" },
  { name: "Aave V3", logo: "https://cryptologos.cc/logos/aave-aave-logo.svg" },
]

const TechStack = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black border-y border-white/10 overflow-hidden">

      {/* ================= BACKGROUND GLOW LAYER ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[160px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow">
            Built on Proven Web3 Infrastructure
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm md:text-base">
            We leverage battle-tested decentralized protocols to ensure security, scalability, and sustainable yield.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tech.map((t, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl border border-white/10
                         bg-gradient-to-b from-slate-900/80 to-slate-950
                         hover:border-cyan-400/60 transition-all duration-300
                         shadow-xl shadow-black/40 overflow-hidden"
            >
              {/* Card glow */}
              <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-r from-cyan-400/30 to-indigo-500/30
                              opacity-0 group-hover:opacity-100 blur-xl transition" />

              {/* Card content */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                <img
                  src={t.logo}
                  alt={t.name}
                  className="h-14 object-contain drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]
                             group-hover:scale-110 transition"
                />
                <span className="text-sm md:text-base font-bold text-white tracking-wide drop-shadow">
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
