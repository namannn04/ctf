import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who can participate in the CTF?',
      answer: 'Our CTF is open to everyone! Whether you\'re a student, professional, or hobbyist, if you\'re interested in cybersecurity, you\'re welcome to join. We have challenges for all skill levels, from beginners to advanced.'
    },
    {
      question: 'Do I need to be part of a team?',
      answer: 'You can participate individually or form teams of up to 4 members. Team registration is optional - solo participants are equally welcome. Teams often have advantages in solving diverse challenges, but many successful competitors participate alone.'
    },
    {
      question: 'What do I need to bring or prepare?',
      answer: 'Bring your laptop with a stable internet connection. Install common security tools like Wireshark, Burp Suite, Python, and a hex editor. We recommend having a Linux environment (native or VM). All challenges will be accessible through our online platform.'
    },
    {
      question: 'Is there a registration fee?',
      answer: 'Registration is completely free! We believe in making cybersecurity education accessible to everyone. There are no hidden costs - just register and start competing.'
    },
    {
      question: 'What is the format of the competition?',
      answer: 'This is a Jeopardy-style CTF with challenges across multiple categories including web exploitation, cryptography, binary exploitation, forensics, reverse engineering, and network security. Each solved challenge earns points, with dynamic scoring based on solve rate.'
    },
    {
      question: 'Can beginners participate?',
      answer: 'Absolutely! We have challenges specifically designed for beginners. Start with our easy-level challenges and work your way up. We also offer workshops and hints to help you learn throughout the competition.'
    },
    {
      question: 'Will there be hints available?',
      answer: 'Yes, hints are available for most challenges. Using a hint may reduce the points you earn for that challenge, but they\'re there to help you learn and progress. The competition is about learning as much as winning!'
    },
    {
      question: 'How are winners determined?',
      answer: 'Winners are determined by the total points accumulated by solving challenges. In case of a tie, the team/individual who reached that score first will rank higher. Points are awarded based on challenge difficulty and dynamic scoring.'
    },
    {
      question: 'What happens after I solve a challenge?',
      answer: 'After solving a challenge, submit the flag (usually in format: flag{...}). If correct, you\'ll immediately receive points and the challenge will be marked as solved. You can then move on to other challenges or try to optimize your approach.'
    },
    {
      question: 'Are there any rules or restrictions?',
      answer: 'Standard CTF rules apply: no DDOS attacks on infrastructure, no sharing flags between teams, no attacking other participants. Automated tools are allowed. Collaboration within your team is encouraged. Full rules will be provided upon registration.'
    },
    {
      question: 'Will I receive a certificate?',
      answer: 'Yes! All participants who solve at least one challenge will receive a participation certificate. Top performers will receive special achievement certificates, and winners will receive awards alongside their prizes.'
    },
    {
      question: 'Can I attend virtually?',
      answer: 'Yes! The competition is available both online and in-person (hybrid format). All challenges are accessible through our web platform, so remote participants have the same experience as on-site attendees.'
    }
  ];

  return (
    <section id="faqs" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 bg-linear-to-r from-[#DC143C] to-[#8B0000] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about the competition
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-[#1a0000] to-black border-2 border-[#4B0000]/50 rounded-xl overflow-hidden hover:border-[#8B0000]/80 transition-all duration-300 relative"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 pr-8">
                  <h3 className="text-white">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#DC143C] shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-linear-to-r from-[#1a0000]/50 to-[#4B0000]/30 border-2 border-[#4B0000]/50 rounded-2xl text-center relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#8B0000] text-white px-6 py-2 rounded-full text-sm font-bold">
            NEED HELP?
          </div>
          
          <h3 className="text-2xl text-white mb-3 mt-4">Still have questions?</h3>
          <p className="text-gray-400 mb-6">
            Feel free to reach out to our team - we're here to help!
          </p>
          <button className="px-8 py-3 bg-linear-to-r from-[#8B0000] to-[#4B0000] text-white rounded-lg hover:shadow-lg hover:shadow-[#8B0000]/50 transition-all duration-300 border-2 border-[#DC143C]">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}