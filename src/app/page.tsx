import { Page } from '@/components/PageLayout';
import { AuthButton } from '../components/AuthButton';
import { AgentCard } from '@/components/AgentCard';
import { CategoryPill } from '@/components/CategoryPill';

const categories = [
  'All',
  'Productivity',
  'Creative',
  'Research',
  'Development',
  'Business',
];

const featuredAgents = [
  {
    id: 1,
    name: 'Code Assistant',
    description: 'AI-powered coding assistant that helps with development tasks',
    category: 'Development',
    rating: 4.8,
    usageCount: 1234,
  },
  {
    id: 2,
    name: 'Content Writer',
    description: 'Generate high-quality content for blogs and social media',
    category: 'Creative',
    rating: 4.6,
    usageCount: 2345,
  },
  {
    id: 3,
    name: 'Research Analyst',
    description: 'AI agent that helps with data analysis and research',
    category: 'Research',
    rating: 4.9,
    usageCount: 3456,
  },
];

export default function Home() {
  return (
    <Page>
      <Page.Main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">AI Agent Marketplace</h1>
          <AuthButton />
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <CategoryPill key={category} name={category} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Featured Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </Page.Main>
    </Page>
  );
}
