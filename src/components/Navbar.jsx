import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // STEP 1: Hilangkan background utama, beri padding atas agar 'floating'
    <nav className="fixed w-full z-50 top-0 pt-6 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center relative">

        {/* --- LOGO SECTION (Kiri) --- */}
        <div className="flex items-center gap-3 z-20">
            <div className="w-10 h-10 flex-shrink-0">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                    <defs>
                        <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#E5E7EB"></stop>
                            <stop offset="30%" stopColor="#F3F4F6"></stop>
                            <stop offset="70%" stopColor="#D1D5DB"></stop>
                            <stop offset="100%" stopColor="#9CA3AF"></stop>
                        </linearGradient>
                        <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#374151"></stop>
                            <stop offset="50%" stopColor="#1F2937"></stop>
                            <stop offset="100%" stopColor="#111827"></stop>
                        </linearGradient>
                        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#A855F7"></stop> {/* Changed to Purple */}
                            <stop offset="50%" stopColor="#9333EA"></stop>
                            <stop offset="100%" stopColor="#7E22CE"></stop>
                        </linearGradient>
                        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8"></stop>
                            <stop offset="70%" stopColor="#9333EA" stopOpacity="0.4"></stop>
                            <stop offset="100%" stopColor="#7E22CE" stopOpacity="0.1"></stop>
                        </radialGradient>
                    </defs>
                    <path d="M50 10 L80 30 L80 70 L50 90 L20 70 L20 30 Z" fill="url(#diamondGradient)" stroke="#9CA3AF" strokeWidth="0.5" className="drop-shadow-lg"></path>
                    <path d="M50 20 L70 35 L70 65 L50 80 L30 65 L30 35 Z" fill="url(#innerGradient)" stroke="#374151" strokeWidth="0.3"></path>
                    <path d="M50 25 L65 37 L65 63 L50 75 L35 63 L35 37 Z" fill="url(#blueGradient)" opacity="0.7"></path>
                    <circle cx="50" cy="50" r="15" fill="url(#centerGlow)"></circle>
                    <circle cx="50" cy="50" r="3" fill="#FFFFFF" opacity="0.9"></circle>
                    <path d="M50 10 L50 25 M50 75 L50 90 M20 30 L35 37 M65 37 L80 30 M20 70 L35 63 M65 63 L80 70" stroke="#F3F4F6" strokeWidth="1" opacity="0.6"></path>
                    <path d="M30 35 L50 25 L70 35 M30 65 L50 75 L70 65" stroke="#A855F7" strokeWidth="0.8" opacity="0.4"></path>
                </svg>
            </div>
            <span className="md:block hidden text-2xl font-display font-bold tracking-wider text-white">
                TENZOR
            </span>
        </div>

        {/* --- CENTER MENU (The "Pill") --- */}
        {/* Menggunakan absolute centering agar tepat di tengah layar */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 bg-[#0a0a0a]/50 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 shadow-lg shadow-purple-900/5">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#technology">Technology</NavLink>
          <NavLink href="#team">Team</NavLink>
        </div>

        {/* --- RIGHT SECTION (Glass Button) --- */}
        <div className="hidden md:block z-20">
          <button className="flex items-center gap-2 bg-transparent border border-purple-500/30 text-white px-6 py-2.5 rounded-full font-medium hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 group text-sm">
            Get Started
            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 opacity-50" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-300 hover:text-white transition-colors z-20 bg-black/50 p-2 rounded-lg backdrop-blur-md border border-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu (Full Screen Overlay style for better UX with floating nav) */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 z-10 md:hidden">
           <a href="#features" className="text-2xl text-gray-300 hover:text-purple-400 font-display font-bold" onClick={() => setIsMenuOpen(false)}>Features</a>
           <a href="#how-it-works" className="text-2xl text-gray-300 hover:text-purple-400 font-display font-bold" onClick={() => setIsMenuOpen(false)}>How It Works</a>
           <a href="#technology" className="text-2xl text-gray-300 hover:text-purple-400 font-display font-bold" onClick={() => setIsMenuOpen(false)}>Technology</a>
           <a href="#team" className="text-2xl text-gray-300 hover:text-purple-400 font-display font-bold" onClick={() => setIsMenuOpen(false)}>Team</a>

           <button className="mt-8 bg-purple-600 px-8 py-3 rounded-full text-white font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)]">
             Get Started
           </button>
        </div>
      )}
    </nav>
  );
};

// Helper Component untuk Link Menu agar lebih rapi
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="px-5 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
  >
    {children}
  </a>
);

export default Navbar;
