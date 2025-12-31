import React from 'react';
import { Twitter, Send } from "lucide-react"


const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-">
            <div className="flex items-center gap-2 mb-4">
                <div className="md:w-32 w-24 h-10">
                    <img src="/images/logo1.png" />
                </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Decentralized protocol for automated crypto asset management. Smart, secure, and transparent investing.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-200">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Vaults</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Statistics</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-200">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Audits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-3 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition"
              >
                <Twitter className="w-5 h-5 text-slate-300 hover:text-white" />
              </a>

              <a
                href="#"
                className="p-3 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition"
              >
                <Send className="w-5 h-5 text-slate-300 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-300 text-xs text-center md:text-left">
            &copy; 2024 TENZOR Protocol. All rights reserved.
          </p>
          <p className="text-slate-300 text-xs text-center md:text-right">
            Disclaimer: Crypto investments carry high risk. DYOR.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
