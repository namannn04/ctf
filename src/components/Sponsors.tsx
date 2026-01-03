export function Sponsors() {
  const platinumSponsors = [
    { name: 'CyberShield Corp', logo: 'CS' },
    { name: 'DefenseLabs', logo: 'DL' }
  ];

  const goldSponsors = [
    { name: 'SecureNet Inc', logo: 'SN' },
    { name: 'QuantumSafe', logo: 'QS' },
    { name: 'CloudDefense', logo: 'CD' }
  ];

  const silverSponsors = [
    { name: 'BinaryLabs', logo: 'BL' },
    { name: 'NetGuard Pro', logo: 'NG' },
    { name: 'CryptoShield', logo: 'CS' },
    { name: 'DataFortress', logo: 'DF' }
  ];

  return (
    <section id="sponsors" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 bg-linear-to-r from-[#DC143C] to-[#8B0000] bg-clip-text text-transparent">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Thank you to our incredible sponsors who make this event possible
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-gray-100 to-gray-300 px-6 py-3 rounded-full">
              <h3 className="text-xl text-black font-bold">Platinum Sponsors</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platinumSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="p-12 bg-linear-to-br from-gray-900/50 to-black border-4 border-gray-400/50 rounded-2xl hover:border-gray-300/80 transition-all duration-300 hover:shadow-xl hover:shadow-gray-400/20 flex items-center justify-center relative group"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-linear-to-br from-gray-300 to-gray-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border-4 border-gray-600">
                    <span className="text-3xl text-white font-bold">{sponsor.logo}</span>
                  </div>
                  <h4 className="text-xl text-white">{sponsor.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-yellow-400 to-yellow-600 px-6 py-3 rounded-full">
              <h3 className="text-xl text-black font-bold">Gold Sponsors</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goldSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="p-8 bg-linear-to-br from-yellow-900/30 to-black border-4 border-yellow-500/50 rounded-xl hover:border-yellow-400/80 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20 flex items-center justify-center relative group"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform border-4 border-yellow-700">
                    <span className="text-2xl text-white font-bold">{sponsor.logo}</span>
                  </div>
                  <h4 className="text-white">{sponsor.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#DC143C] to-[#8B0000] px-6 py-3 rounded-full">
              <h3 className="text-xl text-white font-bold">Silver Sponsors</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {silverSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="p-6 bg-linear-to-br from-[#1a0000] to-black border-2 border-[#8B0000]/50 rounded-lg hover:border-[#DC143C]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#DC143C]/20 flex items-center justify-center relative group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-linear-to-br from-[#8B0000] to-[#4B0000] rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform border-2 border-[#4B0000]">
                    <span className="text-lg text-white font-bold">{sponsor.logo}</span>
                  </div>
                  <h4 className="text-white">{sponsor.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 p-8 bg-linear-to-r from-[#1a0000]/50 to-[#4B0000]/30 border-2 border-[#4B0000]/50 rounded-2xl text-center relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#8B0000] text-white px-6 py-2 rounded-full text-sm font-bold">
            PARTNERSHIP OPPORTUNITY
          </div>
          
          <h3 className="text-2xl text-white mb-3 mt-4">Interested in Sponsoring?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join us in supporting the next generation of cybersecurity professionals. Contact us to learn about sponsorship opportunities.
          </p>
          <button className="px-8 py-3 bg-linear-to-r from-[#8B0000] to-[#4B0000] text-white rounded-lg hover:shadow-lg hover:shadow-[#8B0000]/50 transition-all duration-300 border-2 border-[#DC143C]">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
}