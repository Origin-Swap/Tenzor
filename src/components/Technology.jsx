import React from 'react';
import { Lock, Zap, Globe, Eye, Database, Cpu } from 'lucide-react';

const TechItem = ({ icon, title, desc }) => (
    <div className="flex gap-4 items-start text-white">
        <div className="text-cyan-400 mt-1 p-2 bg-cyan-900/20 rounded-lg">
            {React.cloneElement(icon, { size: 20 })}
        </div>
        <div>
            <h4 className="font-bold text-lg mb-2">{title}</h4>
            <p className="text-gray-400 text-sm">{desc}</p>
        </div>
    </div>
);

const StatBox = ({ number, label }) => (
    <div className="text-center p-6 bg-white/5 rounded-xl border border-white/5">
        <div className="text-4xl font-bold text-cyan-400 mb-2">{number}</div>
        <div className="text-gray-500 uppercase text-xs tracking-wider">{label}</div>
    </div>
);

const Technology = () => {
  return (
    <section id="technology" className="py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Cutting-Edge Technology</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Built on the most advanced blockchain infrastructure with enterprise-grade security and performance at its core.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
         <TechItem icon={<Lock />} title="Blockchain Security" desc="Multi-layer security protocols with enterprise-grade encryption and smart contract auditing." />
         <TechItem icon={<Zap />} title="Lightning Fast" desc="Optimized for speed with Layer 2 solutions and efficient transaction processing." />
         <TechItem icon={<Globe />} title="Cross-Chain Compatible" desc="Seamlessly interact with multiple blockchain networks for maximum flexibility." />
         <TechItem icon={<Eye />} title="Privacy Focused" desc="Zero-knowledge proofs and advanced cryptography protect sensitive asset data." />
         <TechItem icon={<Database />} title="Decentralized Storage" desc="IPFS integration ensures permanent, tamper-proof storage of asset documentation." />
         <TechItem icon={<Cpu />} title="AI-Powered Analytics" desc="Machine learning algorithms provide real-time asset valuation and risk assessment." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-12">
          <StatBox number="99.99%" label="Network Uptime" />
          <StatBox number="<2s" label="Transaction Speed" />
          <StatBox number="256-bit" label="Encryption Standard" />
      </div>
    </section>
  );
};

export default Technology;
