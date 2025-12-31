import React from "react"
import { CheckCircle2, Circle, Clock } from "lucide-react"

const Roadmap = () => {
  const phases = [
    {
      quarter: "Q4 2025",
      title: "Concept & Whitepaper",
      status: "completed",
      items: ["Market Research", "Whitepaper V1 Release", "Community Building"],
    },
    {
      quarter: "Q1 2026",
      title: "Development Phase",
      status: "current",
      items: ["Smart Contract Development", "Private Alpha Testing", "Security Audit Partnership"],
    },
    {
      quarter: "Q2 2026",
      title: "Public Launch",
      status: "upcoming",
      items: ["Public Beta Launch", "Initial Index Offerings (IIO)", "Governance Token TGE"],
    },
    {
      quarter: "Q3 2026",
      title: "Expansion",
      status: "upcoming",
      items: ["Cross-chain Integration", "Mobile App Release", "DAO Governance Live"],
    },
  ]

  const statusStyles = {
    completed: "from-emerald-500 to-cyan-400",
    current: "from-indigo-500 to-purple-500",
    upcoming: "from-slate-700 to-slate-800",
  }

  return (
    <section id="roadmap" className="py-28 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Project Roadmap
          </h2>
          <p className="mt-4 text-slate-200">
            Our journey to redefine decentralized investing
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent hidden lg:block" />

          {phases.map((phase, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:-translate-y-3
                ${
                  phase.status === "current"
                    ? "border-indigo-500/50 shadow-xl shadow-indigo-500/20"
                    : "border-slate-800"
                }
              `}
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0))",
              }}
            >
              {/* glowing border */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition
                bg-gradient-to-r ${statusStyles[phase.status]}`}
              />

              {/* header */}
              <div className="relative flex justify-between items-center mb-5">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/60 text-indigo-400 border border-indigo-500/30">
                  {phase.quarter}
                </span>

                {phase.status === "completed" ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : phase.status === "current" ? (
                  <Clock className="w-5 h-5 text-indigo-400 animate-pulse" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-600" />
                )}
              </div>

              <h3 className="relative text-xl font-bold text-white mb-5">
                {phase.title}
              </h3>

              <ul className="relative space-y-3 text-sm">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${statusStyles[phase.status]}`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* progress bar */}
              <div className="relative mt-6 h-1 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${statusStyles[phase.status]}`}
                  style={{
                    width:
                      phase.status === "completed"
                        ? "100%"
                        : phase.status === "current"
                        ? "60%"
                        : "10%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap
