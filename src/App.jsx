import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Technology from './components/Technology';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <HowItWorks />
      <Technology />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
