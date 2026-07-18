import { ArrowUpRight } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="group rounded-[28px] border border-slate-100 bg-white p-6 shadow-[0_15px_50px_rgba(17,24,39,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,87,255,0.14)]">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0057FF]/10 text-[#0057FF]">
          <Icon size={20} />
        </div>
        <ArrowUpRight className="text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0057FF]" size={18} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
};

export default FeatureCard;
