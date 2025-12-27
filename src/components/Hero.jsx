import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative z-10 pt-40 pb-16 md:pt-28 md:pb-32 overflow-hidden">

       {/* --- BACKGROUND SPOTLIGHTS --- */}
       {/* Mobile: Smaller & dimmer lights. Desktop: Large glowing orbs */}
       <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/20 md:bg-purple-600/30 blur-[80px] md:blur-[150px] rounded-full pointer-events-none -translate-x-1/4 -translate-y-1/4" />
       <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-fuchsia-600/20 blur-[80px] md:blur-[150px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4" />

       {/* Ambient glow for mobile bottom to connect with next section */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-purple-900/20 to-transparent md:hidden" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">

          {/* --- LEFT COLUMN: Text Content --- */}
          {/* Mobile: Centered text. Desktop: Left aligned */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

             {/* Badge */}
            <a href="#features" className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold tracking-widest uppercase hover:bg-purple-500/20 transition-colors cursor-pointer group mx-auto lg:mx-0">
              The Future of Finance
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
            </a>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-6 text-white tracking-tight">
              Unlock the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                Asset Tokenization
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-8 leading-relaxed px-2 lg:px-0">
              Seamlessly tokenize, trade, and manage real-world assets on the blockchain. Experience liquidity and transparency like never before.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold rounded-full hover:from-purple-500 hover:to-fuchsia-500 transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] flex items-center justify-center gap-2 group">
                  Start Tokenizing <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 rounded-full text-white font-medium transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                <Play size={18} className="fill-current" /> Watch Demo
              </button>
            </div>
          </div>

          {/* --- RIGHT COLUMN: 3D Illustration (CSS Generated) --- */}
          {/* Mobile: Shown but scaled down & margin top. Desktop: Full size side-by-side */}
          <div className="lg:w-1/2 relative w-full mt-8 lg:mt-0 perspective-1000 group">

            {/* Wrapper to scale down visually on mobile without breaking layout flow */}
            <div className="relative w-full h-[350px] md:h-[500px] transform scale-90 md:scale-100 transition-transform duration-500 hover:scale-[1.02]">

                {/* 3D Rotated Container */}
                <div className="relative w-full h-full transform rotate-y-[-10deg] md:rotate-y-[-15deg] rotate-x-[5deg] preserve-3d">

                    {/* Crystal 1 (Back Left) */}
                    <div className="absolute top-[20%] left-[15%] w-48 md:w-64 h-72 md:h-96 bg-gradient-to-tr from-purple-900/80 to-fuchsia-600/80 rounded-2xl blur-md md:blur-xl backdrop-blur-md border border-white/10 transform rotate-6 animate-pulse-slow shadow-2xl shadow-purple-900/50"></div>

                    {/* Crystal 2 (Top Right - Main) */}
                    <div className="absolute top-0 right-[10%] md:right-10 w-56 md:w-72 h-64 md:h-80 bg-gradient-to-bl from-violet-900/80 to-purple-600/80 rounded-2xl blur-md md:blur-xl backdrop-blur-md border border-white/20 -rotate-12 z-10 shadow-2xl shadow-violet-900/50"></div>

                    {/* Crystal 3 (Bottom Left - Front) */}
                    <div className="absolute bottom-[10%] left-[20%] md:left-20 w-40 md:w-56 h-56 md:h-72 bg-gradient-to-t from-fuchsia-900/80 to-pink-600/80 rounded-2xl blur-lg md:blur-2xl backdrop-blur-md border border-white/10 rotate-3 z-20 shadow-2xl shadow-fuchsia-900/50"></div>

                    {/* Glare Effects (Highlights) */}
                    <div className="absolute top-20 right-20 w-20 h-20 bg-white/40 blur-[30px] rounded-full z-30 mix-blend-overlay animate-pulse"></div>
                    <div className="absolute bottom-40 left-32 w-16 h-16 bg-fuchsia-400/40 blur-[20px] rounded-full z-30 mix-blend-overlay"></div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Hero;
