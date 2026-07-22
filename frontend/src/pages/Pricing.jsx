import PageTemplate from '../components/PageTemplate.jsx';

const plans = [
  { title: 'Essential', description: 'Core visibility and operational tools for growing logistics teams.' },
  { title: 'Professional', description: 'Advanced automation, analytics and control for scaling operations.' },
  { title: 'Enterprise', description: 'A tailored platform, integrations and support for complex networks.' },
];

export default function Pricing() {
  return <PageTemplate eyebrow="PRICING" title="Plans That Scale With You." description="Choose the operational foundation that fits today, then expand as your logistics network grows." items={plans}><div className="mt-16 grid gap-8 lg:grid-cols-2"><div className="rounded-[20px] bg-[#f4f8ff] p-7"><h2 className="text-2xl font-bold">Feature comparison</h2><ul className="mt-5 space-y-3 text-sm text-slate-600"><li>Core TMS and live tracking</li><li>Fleet, driver and compliance workflows</li><li>Analytics and Control Tower visibility</li><li>Integrations and tailored enterprise support</li></ul></div><div className="rounded-[20px] border border-slate-100 p-7"><h2 className="text-2xl font-bold">Frequently asked questions</h2><div className="mt-5 space-y-4 text-sm text-slate-600"><p><strong className="text-slate-800">Can plans be customized?</strong><br />Yes. Modules and rollout scope can be aligned to your operations.</p><p><strong className="text-slate-800">Is onboarding included?</strong><br />Implementation support is planned around your selected solution.</p></div></div></div></PageTemplate>;
}
