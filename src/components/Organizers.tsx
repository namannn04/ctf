// import { Mail } from 'lucide-react';
import shaymonImage from '../assets/shaymon.jpeg';
import somilImage from '../assets/somil.jpg';

export function Organizers() {
  const organizers = [
    {
      name: 'Geek Room MSIT',
      description: 'A global community of cybersecurity enthusiasts dedicated to promoting ethical hacking and security awareness.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      // email: 'contact@techsec.org',
    },
    {
      name: 'IILM GDG',
      description: 'Non-profit organization focused on cybersecurity education and skill development for students and professionals.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      // email: 'info@cyberedu.org',
    },
    {
      name: 'Thyndercipher',
      description: 'Platform connecting security researchers, bug bounty hunters, and cybersecurity professionals worldwide.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
      // email: 'hello@hackershub.io',
    }
  ];

  const teamMembers = [
    { name: 'Shaymon Khawas', image: shaymonImage },
    { name: 'Somil Jha', image: somilImage },
  ];

  return (
    <section id="organizers" className="py-24 bg-[#0a0000] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 bg-linear-to-r from-[#DC143C] to-[#8B0000] bg-clip-text text-transparent">
            Organizers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the teams and organizations making this event possible
          </p>
        </div>

        {/* Main Organizers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {organizers.map((org, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-[#1a0000] to-black border-2 border-[#4B0000]/50 rounded-xl overflow-hidden hover:border-[#8B0000]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#8B0000]/20 relative group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={org.image}
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl text-white mb-1">{org.name}</h3>
                <p className="text-gray-400 mb-4">{org.description}</p>
                
                <div className="flex flex-col gap-2">
                  {/* <a
                    href={`mailto:${org.email}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#DC143C] transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{org.email}</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Team */}
        <div className="p-8 bg-linear-to-r from-[#1a0000]/50 to-[#4B0000]/30 border-2 border-[#4B0000]/50 rounded-2xl relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#8B0000] text-white px-6 py-2 rounded-full text-sm font-bold">
            CORE TEAM
          </div>
          
          <h3 className="text-2xl text-white mb-6 text-center mt-4">Core Organizing Team</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(16.666%-20px)]">
                <div className="relative inline-block mb-3">
                  <div className="w-28 h-28 bg-linear-to-br from-[#8B0000] to-[#4B0000] rounded-full flex items-center justify-center mx-auto border-4 border-[#4B0000]/50 group-hover:border-[#8B0000] transition-all overflow-hidden">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-2xl text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    )}
                  </div>
                </div>
                <h4 className="text-white mb-1">{member.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}