export function Partners() {
  const partners = [
    { name: 'TechHub University', category: 'Academic Partner', logo: 'THU' },
    { name: 'DevSec Alliance', category: 'Industry Partner', logo: 'DSA' },
    { name: 'InfoSec Magazine', category: 'Media Partner', logo: 'ISM' },
    { name: 'CyberCafe Network', category: 'Venue Partner', logo: 'CCN' },
    { name: 'Code Academy', category: 'Training Partner', logo: 'CA' },
    { name: 'Security Weekly', category: 'Media Partner', logo: 'SW' },
    { name: 'HackerSpace', category: 'Community Partner', logo: 'HS' },
    { name: 'TechCrunch', category: 'Media Partner', logo: 'TC' }
  ];

  return (
    <section id="partners" className="py-24 bg-[#0a0000] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #8B0000 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 bg-linear-to-r from-[#DC143C] to-[#8B0000] bg-clip-text text-transparent">
            Partners
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Collaborating with leading organizations to create an exceptional experience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group p-6 bg-linear-to-br from-[#1a0000] to-black border-2 border-[#4B0000]/50 rounded-xl hover:border-[#8B0000]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#8B0000]/20 flex flex-col items-center justify-center relative"
            >
              <div className="w-20 h-20 bg-linear-to-br from-[#8B0000] to-[#4B0000] rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border-4 border-[#4B0000]/50">
                <span className="text-xl text-white font-bold">{partner.logo}</span>
              </div>
              <h4 className="text-white text-center mb-1">{partner.name}</h4>
              <p className="text-gray-400 text-center text-sm">{partner.category}</p>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-linear-to-br from-[#4B0000]/30 to-black border-2 border-[#4B0000]/50 rounded-xl relative">
            <h3 className="text-xl text-white mb-2">Academic Partners</h3>
            <p className="text-gray-400">
              Universities and educational institutions supporting student participation and research collaboration.
            </p>
          </div>
          <div className="p-6 bg-linear-to-br from-[#4B0000]/30 to-black border-2 border-[#4B0000]/50 rounded-xl relative">
            <h3 className="text-xl text-white mb-2">Media Partners</h3>
            <p className="text-gray-400">
              Leading tech publications and podcasts helping us reach a wider audience and share knowledge.
            </p>
          </div>
          <div className="p-6 bg-linear-to-br from-[#4B0000]/30 to-black border-2 border-[#4B0000]/50 rounded-xl relative">
            <h3 className="text-xl text-white mb-2">Community Partners</h3>
            <p className="text-gray-400">
              Security communities and forums fostering collaboration and knowledge sharing among participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}