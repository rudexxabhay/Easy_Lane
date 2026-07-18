import { motion } from 'framer-motion';
import { Bell, Navigation, ShieldCheck, Sparkles, Thermometer } from 'lucide-react';
import heroDashboard from '../assets/hero.png';
import FloatingCard from './FloatingCard.jsx';

const HeroDashboard = () => {
  return (
    <div className="relative mx-auto w-full max-w-[600px] mt-10 bg-transparent">
      <div className="relative overflow-hidden rounded-[24px] bg-transparent">
        <img
          src={heroDashboard}
          alt="EasyLane logistics dashboard"
          className="h-auto w-full object-contain drop-shadow-2xl"
        />

        {/* <div className="absolute left-4 top-4 rounded-[14px] border border-white/70 bg-white/85 px-3 py-2 shadow-[0_8px_18px_rgba(15,23,42,0.09)] backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Live
          </div>
        </div> */}

        {/* <div className="absolute right-4 top-4 rounded-[14px] border border-white/70 bg-white/85 p-2 shadow-[0_8px_18px_rgba(15,23,42,0.09)] backdrop-blur-md">
          <Bell size={18} className="text-slate-500" />
        </div> */}

        <div className="absolute left-4 bottom-4 rounded-[14px] border border-white/70 bg-white/85 p-3 shadow-[0_8px_18px_rgba(15,23,42,0.09)] backdrop-blur-md">
          <div className="flex items-center gap-3">
            {/* <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#2563EB]/10 text-[#2563EB]">
              <Thermometer size={18} />
            </div> */}
            <div>
              {/* <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Temperature</p> */}
              {/* <p className="text-sm font-semibold text-slate-900">21°C</p> */}
            </div>
          </div>
        </div>

        {/* <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          className="absolute -left-4 top-8 rounded-[18px] border border-white/80 bg-white/90 p-3 shadow-[0_16px_40px_rgba(15,23,42,0.09)] backdrop-blur-lg"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#2563EB]/10 text-[#2563EB]">
              <Navigation size={18} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">AI Insight</p>
              <p className="text-sm font-semibold text-slate-900">12 hrs left</p>
            </div>
          </div>
        </motion.div> */}

        {/* <FloatingCard
          icon={Sparkles}
          title="AI Assist"
          value="4 workflows"
          className="bottom-8 left-4"
        /> */}
        {/* <FloatingCard
          icon={ShieldCheck}
          title="Status"
          value="Stable"
          className="bottom-3 right-4"
        /> */}
      </div>
    </div>
  );
};

export default HeroDashboard;
