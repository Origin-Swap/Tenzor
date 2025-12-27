import React from 'react';
import { ShieldCheck, Zap, Globe, Layers, FileCheck, Users } from 'lucide-react';

const FeatureCard = ({ icon, title, desc }) => (
  <div className="group relative md:p-8 p-4 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.15)] overflow-hidden">

    {/* Background Gradient Blob on Hover */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full translate-x-10 -translate-y-10 group-hover:bg-purple-500/20 transition-all duration-500" />

    {/* Icon Wrapper with Gradient Border */}
    <div className="relative mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-[#13131a] border border-white/10 group-hover:border-purple-500/50 shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
      <div className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300 transform group-hover:scale-110">
        {icon}
      </div>
    </div>

    {/* Content */}
    <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-purple-200 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors">
      {desc}
    </p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Ambience (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-4">
            Why Choose TENZOR
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            Powerful Features for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Modern Finance
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the next generation of asset tokenization with features designed for
            institutional-grade security and global scalability.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard
            icon={<ShieldCheck size={28} />}
            title="Enterprise Security"
            desc="Bank-grade security architecture with multi-signature wallets, real-time smart contract audits, and full ISO regulatory compliance."
          />
          <FeatureCard
            icon={<Zap size={28} />}
            title="Instant Tokenization"
            desc="Transform real-world assets into digital tokens in minutes. Our streamlined protocol reduces settlement time by 99%."
          />
          <FeatureCard
            icon={<Globe size={28} />}
            title="Global Accessibility"
            desc="Access and trade tokenized assets from 180+ countries, 24/7. Eliminating traditional barriers to entry for global investors."
          />
          <FeatureCard
            icon={<Layers size={28} />}
            title="Fractional Ownership"
            desc="Democratize investment by splitting high-value assets into tradeable fractions, increasing liquidity and market depth."
          />
          <FeatureCard
            icon={<FileCheck size={28} />}
            title="Regulatory Compliant"
            desc="Built-in KYC/AML protocols ensure your assets meet regulatory requirements across multiple jurisdictions automatically."
          />
          <FeatureCard
            icon={<Users size={28} />}
            title="Community Governance"
            desc="Participate in a decentralized ecosystem where stakeholders have a voice in the protocol's future development."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
