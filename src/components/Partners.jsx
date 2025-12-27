import React from 'react';

const Partners = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">Strategic Partners</p>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Collaborating with industry leaders to build the future of decentralized finance</p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-10 w-32 bg-white/10 rounded flex items-center justify-center text-xs text-gray-500">
              Partner Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
