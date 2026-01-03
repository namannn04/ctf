import { Linkedin, Twitter } from 'lucide-react';

export function Judges() {
  const judges = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Security Officer',
      company: 'CyberShield Corp',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Former NSA security researcher with 15+ years in offensive security',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Security Researcher',
      company: 'DefenseLabs',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Renowned penetration tester and bug bounty hunter',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Emily Zhang',
      title: 'Head of Red Team',
      company: 'SecureNet Inc',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Expert in advanced persistent threats and malware analysis',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'James Anderson',
      title: 'Cryptography Expert',
      company: 'QuantumSafe',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'PhD in Cryptography, author of multiple security standards',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Priya Patel',
      title: 'Director of Security',
      company: 'CloudDefense',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Specialist in cloud security and infrastructure protection',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Alex Thompson',
      title: 'Reverse Engineer',
      company: 'BinaryLabs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Expert in binary exploitation and hardware security',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <section id="judges" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(90deg, #8B0000 0, #8B0000 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 bg-linear-to-r from-[#DC143C] to-[#8B0000] bg-clip-text text-transparent">
            Meet Our Judges
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Industry leaders and security experts who will evaluate your solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {judges.map((judge, index) => (
            <div
              key={index}
              className="group p-6 bg-linear-to-br from-[#1a0000] to-black border-2 border-[#4B0000]/50 rounded-xl hover:border-[#8B0000]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#8B0000]/20 relative"
            >
              <div className="mb-4 overflow-hidden rounded-lg border-4 border-[#4B0000]/50 relative">
                <img
                  src={judge.image}
                  alt={judge.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-2 right-2 bg-[#8B0000] text-white px-2 py-1 rounded text-xs">
                  EXPERT
                </div>
              </div>
              
              <h3 className="text-xl text-white mb-1">{judge.name}</h3>
              <p className="text-[#DC143C] mb-1">{judge.title}</p>
              <p className="text-gray-500 mb-3">{judge.company}</p>
              <p className="text-gray-400 mb-4">{judge.bio}</p>
              
              <div className="flex gap-3">
                <a
                  href={judge.linkedin}
                  className="p-2 bg-[#1a0000]/50 border border-[#4B0000]/50 rounded-lg hover:bg-[#4B0000]/50 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#DC143C]" />
                </a>
                <a
                  href={judge.twitter}
                  className="p-2 bg-[#1a0000]/50 border border-[#4B0000]/50 rounded-lg hover:bg-[#4B0000]/50 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-[#DC143C]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}