import { Hero } from './components/Hero';
import { About } from './components/About';
import { Schedule } from './components/Schedule';
import { ProblemStatement } from './components/ProblemStatement';
import { PrizePool } from './components/PrizePool';
import { Organizers } from './components/Organizers';
import { Sponsors } from './components/Sponsors';
import { Partners } from './components/Partners';
import { FAQs } from './components/FAQs';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <About />
      <Schedule />
      <ProblemStatement />
      <PrizePool />
      <Organizers />
      <Sponsors />
      <Partners />
      <FAQs />
      <Footer />
    </div>
  );
}