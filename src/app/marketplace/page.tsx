import { Page } from '@/components/PageLayout';
import { AgentCard } from '@/components/AgentCard/AgentCard';
import { useRouter } from 'next/navigation';

interface Agent {
  id: string;
  name: string;
  description: string;
  price: number;
  creator: string;
}

const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Code Assistant',
    description: 'An AI agent that helps with coding tasks and debugging',
    price: 0.1,
    creator: '0x123...abc'
  },
  {
    id: '2',
    name: 'Data Analyst',
    description: 'AI agent specialized in data analysis and visualization',
    price: 0.15,
    creator: '0x456...def'
  },
  {
    id: '3',
    name: 'Content Writer',
    description: 'AI agent that helps create engaging content',
    price: 0.08,
    creator: '0x789...ghi'
  }
];

export default function Marketplace() {
  const router = useRouter();

  const handleViewDetails = (id: string) => {
    router.push(`/marketplace/${id}`);
  };

  return (
    <Page>
      <Page.Main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">AI Agent Marketplace</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              {...agent}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </Page.Main>
    </Page>
  );
} 