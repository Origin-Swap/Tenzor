import React from 'react';

const TeamCard = ({ name, role, bio }) => (
    <div className="p-6 rounded-2xl bg-[#0F0F12] border border-white/5 text-center group hover:-translate-y-2 transition-transform duration-300">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-700 to-gray-900 rounded-full mb-6 border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"></div>
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-cyan-400 text-sm font-medium mb-4">{role}</p>
        <p className="text-gray-400 text-sm">{bio}</p>
    </div>
);

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-transparent to-[#0a0a0a]">
      <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Meet Our Expert Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
              Led by industry veterans from traditional finance, blockchain technology, and regulatory compliance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamCard name="Sarah Chen" role="CEO & Co-Founder" bio="Former VP in traditional finance and blockchain innovation." />
              <TeamCard name="Marcus Rodriguez" role="CTO & Co-Founder" bio="Former Ethereum core developer and blockchain architect." />
              <TeamCard name="David Kim" role="VP of Engineering" bio="Former senior engineer with deep expertise in distributed systems." />
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 inline-block w-full max-w-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">Join our mission</h3>
              <p className="text-gray-400 mb-6">To democratize access to real-world assets through blockchain technology.</p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-500 transition-colors">
                  Join Our Team
              </button>
          </div>
      </div>
    </section>
  );
};

export default Team;
