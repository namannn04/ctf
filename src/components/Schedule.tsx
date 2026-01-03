import { Calendar, Clock } from 'lucide-react';

export function Schedule() {
  const schedule = [
    {
      day: '7th February 2026',
      events: [
        { time: '09:00 AM', title: 'Registration & Check-in', description: 'Welcome reception and team registration' },
        { time: '10:00 AM', title: 'Opening Ceremony', description: 'Keynote speech and competition overview' },
        { time: '10:30 AM', title: 'CTF Begins', description: 'Competition officially starts - Challenges unlocked' },
        { time: '12:00 PM', title: 'Mid-Event Workshop', description: 'Quick skill-building session' },
        { time: '01:00 PM', title: 'Lunch Break', description: 'Networking lunch with sponsors' },
        { time: '02:00 PM', title: 'Competition Resumes', description: 'Continue solving challenges' },
        { time: '04:30 PM', title: 'Final Sprint', description: 'Last hour - Push for maximum points' },
        { time: '05:30 PM', title: 'CTF Ends', description: 'Submission deadline - Competition closes' },
        { time: '06:00 PM', title: 'Awards Ceremony', description: 'Winner announcement and prize distribution' },
        { time: '07:00 PM', title: 'Closing Remarks', description: 'Thank you and networking' }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-24 bg-[#0a0000] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 bg-linear-to-r from-[#DC143C] to-[#8B0000] bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            8 hours of intense cyber-crime investigation and CTF challenges
          </p>
        </div>

        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="relative">
              <div className="flex items-center gap-3 mb-6 bg-linear-to-r from-[#4B0000]/50 to-transparent p-4 rounded-lg border-l-4 border-[#8B0000]">
                <Calendar className="w-6 h-6 text-[#DC143C]" />
                <h3 className="text-2xl text-white">{day.day}</h3>
              </div>
              
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex gap-4 p-4 bg-black/50 border-2 border-[#4B0000]/50 rounded-lg hover:border-[#8B0000]/80 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-2 min-w-30">
                      <Clock className="w-4 h-4 text-[#DC143C] mt-1 shrink-0" />
                      <span className="text-[#DC143C]">{event.time}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white mb-1">{event.title}</h4>
                      <p className="text-gray-400">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}