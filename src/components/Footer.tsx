import { Mail, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t-4 border-[#4B0000]/50 py-12 relative">
      {/* Top decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#8B0000] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-2xl bg-linear-to-r from-[#DC143C] to-[#8B0000] bg-clip-text text-transparent">
                CyberHack CTF
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering the next generation of cybersecurity professionals through competitive challenges.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-[#1a0000]/50 border border-[#4B0000]/50 rounded-lg hover:bg-[#4B0000]/50 transition-colors duration-300">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-[#DC143C]" />
              </a>
              <a href="#" className="p-2 bg-[#1a0000]/50 border border-[#4B0000]/50 rounded-lg hover:bg-[#4B0000]/50 transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#DC143C]" />
              </a>
              <a href="#" className="p-2 bg-[#1a0000]/50 border border-[#4B0000]/50 rounded-lg hover:bg-[#4B0000]/50 transition-colors duration-300">
                <Github className="w-5 h-5 text-gray-400 hover:text-[#DC143C]" />
              </a>
              <a href="#" className="p-2 bg-[#1a0000]/50 border border-[#4B0000]/50 rounded-lg hover:bg-[#4B0000]/50 transition-colors duration-300">
                <Youtube className="w-5 h-5 text-gray-400 hover:text-[#DC143C]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-[#DC143C] transition-colors duration-300">About</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-[#DC143C] transition-colors duration-300">Schedule</a></li>
              <li><a href="#problems" className="text-gray-400 hover:text-[#DC143C] transition-colors duration-300">Challenges</a></li>
              <li><a href="#prizes" className="text-gray-400 hover:text-[#DC143C] transition-colors duration-300">Prizes</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#DC143C] transition-colors duration-300">CTF Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#DC143C] transition-colors duration-300">Past Challenges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#DC143C] transition-colors duration-300">Writeups</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#DC143C] transition-colors duration-300">Tools</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@cyberhackctf.com" className="hover:text-[#DC143C] transition-colors duration-300">
                  info@cyberhackctf.com
                </a>
              </li>
              <li className="text-gray-400">Support: 24/7 Available</li>
              <li><a href="#" className="text-gray-400 hover:text-[#DC143C] transition-colors duration-300">Code of Conduct</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#DC143C] transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-[#4B0000]/50 text-center text-gray-400">
          <p>&copy; 2024 CyberHack CTF. All rights reserved. Built with passion for cybersecurity.</p>
        </div>
      </div>
    </footer>
  );
}