import PageTemplate from '../components/PageTemplate.jsx';

const items = [
  { title: 'Blogs', description: 'Practical perspectives on logistics technology, operations and finance.' },
  { title: 'Case Studies', description: 'See how growing businesses improve control, speed and efficiency.' },
  { title: 'Videos', description: 'Explore product walkthroughs, explainers and logistics insights.' },
  { title: 'Guides', description: 'Actionable resources for modernizing transportation operations.' },
];

export default function Resources() {
  return <PageTemplate eyebrow="RESOURCES" title="Insights for Smarter Logistics." description="Explore ideas, customer stories and practical guidance built for modern logistics teams." items={items} />;
}
