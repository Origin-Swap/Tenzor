import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // STEP 1: Hilangkan background utama, beri padding atas agar 'floating'
    <nav className="fixed w-full z-50 top-0 pt-6 transition-all duration-300">
      <div className="container mx-auto md:px-6 px-2 flex justify-between items-center relative">

        {/* --- LOGO SECTION (Kiri) --- */}
        <div className="flex items-center gap-3 z-20">
            <div className="md:w-32 w-24 h-10">
                <img src="/images/logo1.png" />
            </div>
        </div>

        {/* --- CENTER MENU (The "Pill") --- */}
        {/* Menggunakan absolute centering agar tepat di tengah layar */}
        <div className="hidden text-gray-100 md:flex absolute left-1/2 -translate-x-1/2 items-center font-bold gap-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 shadow-lg shadow-purple-900/5">
          <NavLink href="#about">Features</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#roadmap">Roadmap</NavLink>
        </div>

        {/* --- RIGHT SECTION (Glass Button) --- */}
        <div className="hidden md:block z-20">
          <button className="flex items-center gap-2 bg-transparent border border-purple-500/30 text-white px-6 py-2.5 rounded-full font-medium hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 group text-sm">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-100 hover:text-white transition-colors z-20 bg-black/50 p-2 rounded-lg backdrop-blur-md border border-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu (Full Screen Overlay style for better UX with floating nav) */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 z-10 md:hidden">
           <a href="#about" className="text-2xl text-gray-100 hover:text-purple-400 font-display font-bold" onClick={() => setIsMenuOpen(false)}>Features</a>
           <a href="#how-it-works" className="text-2xl text-gray-100 hover:text-purple-400 font-display font-bold" onClick={() => setIsMenuOpen(false)}>How It Works</a>
           <a href="#roadmap" className="text-2xl text-gray-100 hover:text-purple-400 font-display font-bold" onClick={() => setIsMenuOpen(false)}>Roadmap</a>

           <a
             href="https://app.tenzorassets.com" className="mt-8 bg-purple-600 px-8 py-3 rounded-full text-white font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)]">
             Get Started
           </a>
        </div>
      )}
    </nav>
  );
};

// Helper Component untuk Link Menu agar lebih rapi
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="px-5 py-2 rounded-full text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
  >
    {children}
  </a>
);

export default Navbar;
