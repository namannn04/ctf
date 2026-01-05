export function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-black via-[#0a0000] to-black border-t border-[#8B0000]/30 py-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #8B0000 10px, #8B0000 11px)' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Brand section */}
          <div className="flex-1 max-w-md">
            <h3 className="text-3xl font-bold mb-4 bg-linear-to-r from-[#DC143C] via-[#FF1744] to-[#8B0000] bg-clip-text text-transparent">
              Digital Cyberhunt CTF
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering the next generation of cybersecurity professionals through competitive challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 md:text-right">
            <h4 className="text-white font-semibold text-lg mb-4 border-b-2 border-[#8B0000]/50 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 mt-4">
              <li><a href="#about" className="text-gray-400! hover:text-[#DC143C]! transition-all duration-300 hover:translate-x-1 inline-block">About</a></li>
              <li><a href="#schedule" className="text-gray-400! hover:text-[#DC143C]! transition-all duration-300 hover:translate-x-1 inline-block">Schedule</a></li>
              <li><a href="#problems" className="text-gray-400! hover:text-[#DC143C]! transition-all duration-300 hover:translate-x-1 inline-block">Challenges</a></li>
              <li><a href="#prizes" className="text-gray-400! hover:text-[#DC143C]! transition-all duration-300 hover:translate-x-1 inline-block">Prizes</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#8B0000]/30 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Digital Cyberhunt CTF. All rights reserved. Built with passion for cybersecurity.
          </p>
        </div>
      </div>
    </footer>
  );
}