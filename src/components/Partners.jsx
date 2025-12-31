import React from "react"

const partners = [
  { name: "blazpay", logo: "/images/partners/blazpay-logo.png" },
  { name: "CoinMarketCap", logo: "/images/partners/Btok-logo.png" },
  { name: "Polygon", logo: "/images/partners/amano.png" },
  { name: "Chainlink", logo: "/images/partners/cache-wallet-logo.png" },
  { name: "Certik", logo: "/images/partners/chainlens-log.png" },
  { name: "Arbitrum", logo: "/images/partners/custodiy-logo.jpg" },
  { name: "OKX Ventures", logo: "/images/partners/dmail-logo.png" },
  { name: "Alchemy", logo: "/images/partners/gamerge-logo.png" },
  { name: "The Graph", logo: "/images/partners/onewave-logo.png" },
  { name: "CoinGecko", logo: "/images/partners/pharmatech-ai-logo.png" },
  { name: "AWS Web3", logo: "/images/partners/utopia-logo.png" },
]

const Partners = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-slate-950 to-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm text-indigo-400 uppercase tracking-widest mb-3">
            Strategic Partners
          </p>
          <h2 className="text-3xl font-bold text-white">
            Backed by the Best in Web3
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm">
            Collaborating with industry leaders to build the future of decentralized finance
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="group relative px-6 py-2 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur hover:border-indigo-500/50 transition-all duration-300"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition" />

              <div className="relative flex items-center justify-center h-16">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-[120px] object-contain opacity-70 group-hover:opacity-100 transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
