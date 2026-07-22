import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CircleDollarSign, CircleDot, Truck, UsersRound } from 'lucide-react';
import Button from './Button.jsx';
import HeroDashboard from './HeroDashboard.jsx';
import { api } from '../lib/api.js';

const stats = [
  ['12,000+', 'Vehicles Managed', Truck],
  ['8,500+', 'Active Trips', UsersRound],
  ['₹250Cr+', 'Invoice Volume', CircleDollarSign],
  ['99.9%', 'Tracking Accuracy', CircleDot],
];

const Hero = () => {
  const [content, setContent] = useState(null);
  useEffect(() => { api('/content').then(setContent).catch(() => {}); }, []);
  const hero = content?.hero;
  return (
  <section id="home" className="relative min-h-[620px] overflow-hidden bg-white">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_44%,rgba(27,94,255,.06),transparent_27%),radial-gradient(circle_at_14%_41%,rgba(255,233,0,.055),transparent_26%)]" />
    <div className="site-container relative min-h-[620px] px-5 pt-24 sm:px-8 lg:grid lg:grid-cols-[42%_58%] lg:px-5 lg:pt-0">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="relative z-10 lg:pt-[112px]">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-[#edf3ff] px-3 py-[7px] text-[9px] font-bold tracking-[-.015em] text-[#1358ff]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1358ff]" />
          AI-ENABLED LOGISTICS PLATFORM
        </p>
        <h1 className="mt-7 text-[38px] font-extrabold leading-[1.08] tracking-[-.055em] text-[#061638] sm:text-[44px] lg:text-[47px]">
          {hero?.title || 'Smarter Logistics.'}<br />
          <span className="text-[#1558ff]">{hero?.highlightedTitle || 'Stronger Business.'}</span>
        </h1>
        <p className="mt-5 max-w-[365px] text-[12px] font-medium leading-[1.8] tracking-[-.01em] text-[#53627d]">
          {hero?.description || 'One intelligent platform to manage fleets, operations, finance and people, In real time.'}
        </p>
        <div className="mt-7 flex items-center gap-4">
          <Button href="/book-demo" className="h-[42px] rounded-[7px] px-5 text-[11px]">Book a Demo</Button>
          <Button href="#solutions" variant="outline" className="h-[42px] rounded-[7px] border-[#2e67ff] px-5 text-[11px]">Explore Platform</Button>
        </div>
        <div className="mt-[45px] grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {stats.map(([value, label, Icon]) => (
            <div key={label} className="min-w-0 rounded-[8px] border border-[#edf0f7] bg-white px-2.5 py-3.5 shadow-[0_8px_17px_rgba(15,23,42,.035)]">
              <Icon size={15} strokeWidth={2.1} className="text-[#1358ff]" />
              <p className="mt-3 whitespace-nowrap text-[15px] font-extrabold tracking-[-.04em] text-[#0a1a3c]">{value}</p>
              <p className="mt-1 whitespace-nowrap text-[8px] font-medium tracking-[-.015em] text-[#5d6b84]">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.975 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative mt-10 w-full lg:mt-0 lg:flex lg:justify-end lg:self-start lg:pt-[68px]">
        <div className="mx-auto w-full lg:mx-0 lg:w-[88%]">
          <HeroDashboard />
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default Hero;
