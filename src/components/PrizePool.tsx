import { Trophy, Medal, Award } from 'lucide-react';

export function PrizePool() {
  const prizes = [
    {
      position: '1st Place',
      icon: Trophy,
      amount: '₹7,000',
      color: 'from-yellow-400 to-yellow-600',
      borderColor: 'border-yellow-500/50',
      shadowColor: 'shadow-yellow-500/20',
      perks: ['Cash Prize', 'Premium Swag', 'Certificate', 'Goodies']
    },
    {
      position: '2nd Place',
      icon: Medal,
      amount: '₹5,000',
      color: 'from-gray-300 to-gray-500',
      borderColor: 'border-gray-400/50',
      shadowColor: 'shadow-gray-400/20',
      perks: ['Cash Prize', 'Swag Package', 'Certificate', 'Goodies']
    },
    {
      position: '3rd Place',
      icon: Award,
      amount: '₹3,000',
      color: 'from-orange-400 to-orange-600',
      borderColor: 'border-orange-500/50',
      shadowColor: 'shadow-orange-500/20',
      perks: ['Cash Prize', 'Swag', 'Certificate', 'Goodies']
    }
  ];

  return (
    <section id="prizes" className="py-24 bg-[#0a0000] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 bg-linear-to-r from-[#DC143C] to-[#8B0000] bg-clip-text text-transparent">
            Prize Pool
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ₹15L+ total prize pool with ₹25k+ cash prizes, plus goodies and swag
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`p-8 bg-black/50 border-2 ${prize.borderColor} rounded-2xl hover:shadow-xl ${prize.shadowColor} transition-all duration-300 ${index === 0 ? 'md:scale-105 border-4' : ''} relative`}
            >
              <div className={`w-16 h-16 bg-linear-to-br ${prize.color} rounded-full flex items-center justify-center mb-4 mx-auto mt-6`}>
                <prize.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl text-white text-center mb-2">{prize.position}</h3>
              <div className={`text-4xl bg-linear-to-r ${prize.color} bg-clip-text text-transparent text-center mb-6`}>
                {prize.amount}
              </div>
              
              <ul className="space-y-2">
                {prize.perks.map((perk, perkIndex) => (
                  <li key={perkIndex} className="flex items-center gap-2 text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${prize.color}`}></div>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Plus exclusive merchandise, job interview opportunities with our sponsors, and networking with industry leaders
          </p>
        </div>
      </div>
    </section>
  );
}