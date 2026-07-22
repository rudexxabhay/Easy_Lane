import PageTemplate from '../components/PageTemplate.jsx';

const items = [
  { title: 'FMCG', description: 'Keep high-volume distribution moving with stronger planning and visibility.' },
  { title: 'Retail', description: 'Coordinate store replenishment and last-mile operations across your network.' },
  { title: 'Manufacturing', description: 'Connect inbound materials and outbound distribution with production needs.' },
  { title: 'Pharma', description: 'Support sensitive, compliant logistics with dependable operational oversight.' },
  { title: 'Cold Chain', description: 'Monitor time-critical movement and protect temperature-sensitive deliveries.' },
  { title: '3PL & Aggregators', description: 'Scale multi-client and multi-vendor logistics from one central platform.' },
];

export default function Solutions() {
  return <PageTemplate eyebrow="SOLUTIONS" title="Built for Every Logistics Network." description="Flexible workflows and real-time intelligence for industries with complex transportation and fulfillment needs." items={items} />;
}
