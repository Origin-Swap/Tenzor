import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack'; // GANTI Stats dengan ini
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Partner from './components/Partners';
import FAQ from './components/FAQ'; // TAMBAHKAN ini
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <TechStack />  {/* Lebih baik untuk Early Stage daripada Stats */}
      <About />
      <HowItWorks />
      <Roadmap/>
      <Partner />
      {/* <Team /> */}
      <FAQ />        {/* Penting untuk menjawab keraguan investor */}
      <Footer />
    </div>
  );
}

export default App;
