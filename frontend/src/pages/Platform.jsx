import PageTemplate from '../components/PageTemplate.jsx';

const items = [
  { title: 'TMS', description: 'Plan, dispatch and monitor every trip from one intelligent workspace.' },
  { title: 'Fleet Management', description: 'Manage vehicles, maintenance, fuel, drivers and compliance in real time.' },
  { title: 'Control Tower', description: 'Gain end-to-end operational visibility and respond to exceptions faster.' },
  { title: 'Live Tracking', description: 'Track vehicles, ETAs, routes and delivery progress with reliable updates.' },
];

export default function Platform() {
  return <PageTemplate eyebrow="PLATFORM" title="One Platform. Complete Logistics Control." description="Connect transportation, fleet operations, visibility and finance in a single AI-enabled logistics platform." items={items} />;
}
