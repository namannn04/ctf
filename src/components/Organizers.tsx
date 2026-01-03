import { Mail, Globe } from 'lucide-react';

export function Organizers() {
  const organizers = [
    {
      name: 'TechSec Community',
      role: 'Lead Organizer',
      description: 'A global community of cybersecurity enthusiasts dedicated to promoting ethical hacking and security awareness.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      email: 'contact@techsec.org',
      website: 'https://techsec.org'
    },
    {
      name: 'CyberEdu Foundation',
      role: 'Educational Partner',
      description: 'Non-profit organization focused on cybersecurity education and skill development for students and professionals.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      email: 'info@cyberedu.org',
      website: 'https://cyberedu.org'
    },
    {
      name: 'HackersHub',
      role: 'Community Partner',
      description: 'Platform connecting security researchers, bug bounty hunters, and cybersecurity professionals worldwide.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
      email: 'hello@hackershub.io',
      website: 'https://hackershub.io'
    }
  ];

  const teamMembers = [
    { name: 'David Kim', role: 'Event Director' },
    { name: 'Rachel Moore', role: 'Technical Lead' },
    { name: 'Ahmed Hassan', role: 'Challenge Designer' },
    { name: 'Lisa Park', role: 'Community Manager' },
    { name: 'Carlos Silva', role: 'Platform Engineer' },
    { name: 'Nina Dubois', role: 'Operations Manager' }
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
                <div className="absolute top-2 left-2 bg-[#8B0000] text-white px-3 py-1 rounded text-xs font-bold">
                  {org.role.toUpperCase()}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl text-white mb-1">{org.name}</h3>
                <p className="text-[#DC143C] mb-3">{org.role}</p>
                <p className="text-gray-400 mb-4">{org.description}</p>
                
                <div className="flex flex-col gap-2">
                  <a
                    href={`mailto:${org.email}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#DC143C] transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{org.email}</span>
                  </a>
                  <a
                    href={org.website}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#DC143C] transition-colors duration-300"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{org.website}</span>
                  </a>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-3">
                  <div className="w-20 h-20 bg-linear-to-br from-[#8B0000] to-[#4B0000] rounded-full flex items-center justify-center mx-auto border-4 border-[#4B0000]/50 group-hover:border-[#8B0000] transition-all">
                    <span className="text-2xl text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                </div>
                <h4 className="text-white mb-1">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}