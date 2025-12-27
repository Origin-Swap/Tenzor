import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#08080a] relative overflow-hidden">
      {/* Background Noise & ambient light */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

          {/* KOLOM KIRI: Judul & Deskripsi */}
          {/* PERBAIKAN: Gunakan 'md:sticky' agar di mobile dia tidak menempel (static) */}
          <div className="w-full md:w-1/3 relative md:sticky md:top-32 z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-6">
              Process
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
              How TENZOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Works</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Transform your real-world assets into digital tokens in four simple steps. Our streamlined process ensures security, compliance, and efficiency.
            </p>
            <button className="group flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors">
              Start Your Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </button>
          </div>

          {/* KOLOM KANAN: Langkah-langkah */}
          <div className="w-full md:w-2/3 grid gap-6 relative z-10">
            {[
              { id: "01", title: "Upload Asset Details", desc: "Submit comprehensive documentation and verification of your real-world asset." },
              { id: "02", title: "Compliance Verification", desc: "Our advanced verification system ensures full regulatory compliance and authenticity." },
              { id: "03", title: "Smart Contract Creation", desc: "Automated smart contract deployment creates secure, tradeable digital tokens." },
              { id: "04", title: "Trade & Manage", desc: "Your tokenized assets are now ready for trading, management, and fractional ownership." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 md:p-8 p-4 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all group duration-300 hover:-translate-y-1">

                {/* Number Styling */}
                <span className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-transparent h-fit min-w-[3rem]">
                  {step.id}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
