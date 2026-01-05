import { Calendar, MapPin, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1718592168437-8382e5b97736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmltZSUyMHNjZW5lJTIwaW52ZXN0aWdhdGlvbnxlbnwxfHx8fDE3NjU3NDA5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="CTF Competition"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/95 via-black/85 to-black"></div>
      </div>

      {/* Crime Scene Tape */}
      <div className="absolute top-20 left-0 w-full overflow-hidden rotate-3 z-0">
        <div className="bg-[#8B0000] text-black py-2 font-bold flex whitespace-nowrap animate-marquee">
          <span className="inline-block px-8">CRIME SCENE DO NOT CROSS</span>
          <span className="inline-block px-8">CRIME SCENE DO NOT CROSS</span>
          <span className="inline-block px-8">CRIME SCENE DO NOT CROSS</span>
          <span className="inline-block px-8">CRIME SCENE DO NOT CROSS</span>
          <span className="inline-block px-8">CRIME SCENE DO NOT CROSS</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-[#8B0000]/20 border border-[#8B0000]/50 rounded-full relative">
          <span className="text-[#DC143C]">Capture The Flag Competition 2026</span>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#8B0000] rounded-full flex items-center justify-center text-white animate-pulse">!</div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-linear-to-r from-[#DC143C] via-[#8B0000] to-[#4B0000] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(139,0,0,0.5)]">
          Digital Cyberhunt CTF 2026
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Investigate. Analyze. Solve. Join the ultimate cybersecurity crime scene investigation and crack the case!
        </p>

        {/* Event Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-gray-300 bg-black/50 px-4 py-2 rounded-lg border border-[#4B0000]/50">
            <Calendar className="w-5 h-5 text-[#DC143C]" />
            <span>7th February 2026 • 8 Hours</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 bg-black/50 px-4 py-2 rounded-lg border border-[#4B0000]/50">
            <MapPin className="w-5 h-5 text-[#DC143C]" />
            <span>IILM Greater Noida</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 bg-black/50 px-4 py-2 rounded-lg border border-[#4B0000]/50">
            <Users className="w-5 h-5 text-[#DC143C]" />
            <span>500+ Investigators</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://unstop.com/hackathons/digital-cyberhunt-ctf-geek-room-msit-1612526" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-linear-to-r from-[#8B0000] to-[#4B0000] text-white! rounded-lg hover:shadow-lg hover:shadow-[#8B0000]/50 transition-all duration-300 border-2 border-[#DC143C]"
          >
            Join The Investigation
          </a>
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B0000]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4B0000]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
}