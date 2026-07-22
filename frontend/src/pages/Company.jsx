import PageTemplate from '../components/PageTemplate.jsx';

const items = [
  { title: 'About Easy Lane', description: 'We build connected technology that makes complex logistics easier to run.' },
  { title: 'Mission', description: 'Help businesses move with greater intelligence, visibility and confidence.' },
  { title: 'Vision', description: 'Create a unified digital ecosystem for the future of logistics.' },
  { title: 'Leadership', description: 'A team focused on practical innovation and measurable customer outcomes.' },
  { title: 'Careers', description: 'Join us in building technology that moves businesses forward.' },
  { title: 'Contact', description: 'Talk with our team about your operations, goals and growth plans.' },
];

export default function Company() {
  return <PageTemplate eyebrow="COMPANY" title="Moving Business Forward." description="Easy Lane brings logistics, finance and operational intelligence together for ambitious businesses." items={items} />;
}
