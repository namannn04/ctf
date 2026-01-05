import { Shield, Trophy, Brain, Zap } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Shield,
      title: "Security Challenges",
      description:
        "Real-world cybersecurity scenarios covering web, binary, crypto, forensics, and more.",
    },
    {
      icon: Trophy,
      title: "Compete & Win",
      description:
        "Battle against top security enthusiasts and win exciting prizes worth $50,000+.",
    },
    {
      icon: Brain,
      title: "Learn & Grow",
      description:
        "Enhance your skills through hands-on challenges designed by industry experts.",
    },
    {
      icon: Zap,
      title: "Network",
      description:
        "Connect with cybersecurity professionals, recruiters, and fellow hackers.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #8B0000 0, #8B0000 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 bg-linear-to-r from-[#DC143C] to-[#8B0000] bg-clip-text text-transparent">
            About Digital Cyberhunt CTF
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Digital Cyberhunt CTF is a premier cybersecurity competition
            bringing together the brightest minds in ethical
            hacking. Whether you're a seasoned professional or
            an enthusiastic beginner, our challenges will test
            your limits and expand your horizons in the world of
            cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-linear-to-br from-[#1a0000] to-black border-2 border-[#4B0000]/50 rounded-xl hover:border-[#8B0000]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#8B0000]/20 relative group"
            >
              <div className="w-12 h-12 bg-linear-to-br from-[#8B0000] to-[#4B0000] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-linear-to-r from-[#1a0000]/50 to-[#4B0000]/30 border-2 border-[#4B0000]/50 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#DC143C] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#DC143C] to-transparent"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-[#DC143C] mb-2">
                1500+
              </div>
              <div className="text-gray-400">Participants</div>
            </div>
            <div>
              <div className="text-4xl text-[#DC143C] mb-2">
                50+
              </div>
              <div className="text-gray-400">Challenges</div>
            </div>
            <div>
              <div className="text-4xl text-[#DC143C] mb-2">
                12
              </div>
              <div className="text-gray-400">Hours</div>
            </div>
            <div>
              <div className="text-4xl text-[#DC143C] mb-2">
                ₹ 30K+
              </div>
              <div className="text-gray-400">Prize Pool</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}