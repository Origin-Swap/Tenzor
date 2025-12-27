import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#020202] pt-20 pb-10 border-t border-white/5 text-sm text-white">
      <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

              {/* BRAND COLUMN */}
              <div className="lg:col-span-2">
                  <div className="text-2xl font-display font-bold flex items-center gap-2 mb-6">
                      {/* Logo Icon */}
                      <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                        <span className="text-white font-bold text-lg">T</span>
                      </div>
                      TENZOR
                  </div>
                  <p className="text-gray-400 mb-8 max-w-xs leading-relaxed">
                      Revolutionizing real-world asset tokenization with cutting-edge blockchain technology. Secure, compliant, and accessible to everyone.
                  </p>

                  {/* CONTACT & SOCIALS */}
                  <div className="flex flex-col gap-6">
                    <a href="mailto:support@tenzorassets.com" className="text-gray-400 hover:text-purple-400 transition-colors w-fit">
                        support@tenzorassets.com
                    </a>

                    {/* Social Media Icons */}
                    <div className="flex gap-4">
                        {/* TELEGRAM */}
                        <SocialLink href="https://t.me/tenzor" label="Telegram">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.694 0ZM13 17.022l-.744-3.522 6.422-5.778-8.156 5.244-3.356-1.111 12.378-4.667L13 17.022Z"/>
                            </svg>
                        </SocialLink>

                        {/* X (TWITTER) */}
                        <SocialLink href="https://x.com/tenzor" label="X (Twitter)">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                            </svg>
                        </SocialLink>

                        {/* DISCORD */}
                        <SocialLink href="https://discord.gg/tenzor" label="Discord">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.956 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.42-2.157 2.42z"/>
                            </svg>
                        </SocialLink>
                    </div>
                  </div>
              </div>

              {/* LINKS COLUMN 1 */}
              <div>
                  <h4 className="font-display font-bold text-white mb-6 text-lg">Product</h4>
                  <ul className="space-y-3 text-gray-400">
                      <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
                      <li><a href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a></li>
                      <li><a href="#technology" className="hover:text-purple-400 transition-colors">Technology</a></li>
                      <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                  </ul>
              </div>

              {/* LINKS COLUMN 2 */}
              <div>
                  <h4 className="font-display font-bold text-white mb-6 text-lg">Company</h4>
                  <ul className="space-y-3 text-gray-400">
                      <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
                      <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                      <li><a href="#" className="hover:text-purple-400 transition-colors">Press</a></li>
                      <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                  </ul>
              </div>

              {/* NEWSLETTER */}
              <div>
                  <h4 className="font-display font-bold text-white mb-6 text-lg">Stay Updated</h4>
                  <p className="text-gray-400 mb-4 text-sm">Get the latest updates on asset tokenization.</p>
                  <div className="flex">
                      <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 w-full focus:outline-none focus:border-purple-500 focus:bg-white/10 text-white transition-all text-sm" />
                      <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-r-lg font-semibold transition-colors">
                          Subscribe
                      </button>
                  </div>
              </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
              <p>&copy; 2024-26 TENZOR. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  System Operational
              </div>
          </div>
      </div>
    </footer>
  );
};

// Helper Component for Social Icons
const SocialLink = ({ href, children, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-purple-600 hover:border-purple-500 hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
    >
        {children}
    </a>
);

export default Footer;
