import React from "react"

const tech = [
  { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
  { name: "Chainlink", logo: "https://cryptologos.cc/logos/chainlink-link-logo.svg" },
  { name: "The Graph", logo: "https://cryptologos.cc/logos/the-graph-grt-logo.svg" },
  { name: "Aave V3", logo: "https://cryptologos.cc/logos/aave-aave-logo.svg" },
]

const TechStack = () => {
  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-10">
          Building on robust infrastructure
        </p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-500">
          {tech.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-4 group transition"
            >
              <img
                src={t.logo}
                alt={t.name}
                className="h-10 w-auto object-contain group-hover:scale-110 transition duration-300"
              />
              <span className="text-xl font-semibold text-white">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
