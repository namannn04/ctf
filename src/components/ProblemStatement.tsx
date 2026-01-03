import { Code, Database, Lock, FileSearch, Cpu, Network } from 'lucide-react';

export function ProblemStatement() {
  const categories = [
    {
      icon: Code,
      title: 'Web Exploitation',
      difficulty: 'Easy to Hard',
      description: 'SQL injection, XSS, CSRF, authentication bypass, and modern web vulnerabilities.',
      badge: 'CLASSIFIED'
    },
    {
      icon: Lock,
      title: 'Cryptography',
      difficulty: 'Medium to Expert',
      description: 'Classical ciphers, modern encryption, hash functions, and cryptanalysis.',
      badge: 'TOP SECRET'
    },
    {
      icon: Cpu,
      title: 'Binary Exploitation',
      difficulty: 'Hard to Expert',
      description: 'Buffer overflows, ROP chains, shellcode injection, and reverse engineering.',
      badge: 'CONFIDENTIAL'
    },
    {
      icon: FileSearch,
      title: 'Forensics',
      difficulty: 'Easy to Medium',
      description: 'Memory dumps, disk analysis, network packets, and steganography.',
      badge: 'EVIDENCE'
    },
    {
      icon: Database,
      title: 'Reverse Engineering',
      difficulty: 'Medium to Expert',
      description: 'Binary analysis, decompilation, malware analysis, and code obfuscation.',
      badge: 'RESTRICTED'
    },
    {
      icon: Network,
      title: 'Network Security',
      difficulty: 'Easy to Hard',
      description: 'Packet analysis, protocol exploitation, and network reconnaissance.',
      badge: 'SENSITIVE'
    }
  ];

  return (
    <section id="problems" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 bg-linear-to-r from-[#DC143C] to-[#8B0000] bg-clip-text text-transparent">
            Challenge Categories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Capture The Flag and Cyber-crime investigation challenges across multiple security domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-linear-to-br from-[#1a0000] to-black border-2 border-[#4B0000]/50 rounded-xl hover:border-[#8B0000]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#8B0000]/20 relative"
            >
              {/* Classification badge */}
              <div className="absolute -top-3 -right-3 bg-[#8B0000] text-white px-3 py-1 rounded text-xs rotate-12 shadow-lg">
                {category.badge}
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-[#8B0000] to-[#4B0000] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl text-white mb-2">{category.title}</h3>
              
              <div className="flex items-center gap-4 mb-3 flex-wrap">
                <span className="px-3 py-1 bg-[#8B0000]/20 border border-[#8B0000]/50 rounded-full text-[#DC143C]">
                  {category.difficulty}
                </span>
              </div>
              
              <p className="text-gray-400">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-linear-to-r from-[#1a0000]/50 to-black border-2 border-[#4B0000]/50 rounded-2xl relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#8B0000] text-white px-6 py-2 rounded-full text-sm font-bold">
            INVESTIGATION PROTOCOL
          </div>
          
          <h3 className="text-2xl text-white mb-4 text-center mt-4">Competition Format</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="p-4 bg-black/30 rounded-lg border border-[#4B0000]/30">
              <div className="text-[#DC143C] mb-2">Jeopardy Style</div>
              <p className="text-gray-400">Each challenge has a point value based on difficulty. Solve challenges to earn points and climb the leaderboard.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg border border-[#4B0000]/30">
              <div className="text-[#DC143C] mb-2">Team or Solo</div>
              <p className="text-gray-400">Compete individually or form teams of up to 4 members. Choose your strategy!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}