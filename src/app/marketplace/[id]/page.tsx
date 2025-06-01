import { Page } from '@/components/PageLayout';
import { notFound } from 'next/navigation';

interface Agent {
  id: string;
  name: string;
  description: string;
  price: number;
  creator: string;
  longDescription?: string;
  features?: string[];
}

const mockAgents: Record<string, Agent> = {
  '1': {
    id: '1',
    name: 'Code Assistant',
    description: 'An AI agent that helps with coding tasks and debugging',
    price: 0.1,
    creator: '0x123...abc',
    longDescription: 'A powerful AI coding assistant that can help you with various programming tasks. It can analyze code, suggest improvements, help with debugging, and even generate new code based on your requirements.',
    features: [
      'Code analysis and suggestions',
      'Automated debugging',
      'Code generation',
      'Documentation assistance',
      'Best practices recommendations'
    ]
  },
  '2': {
    id: '2',
    name: 'Data Analyst',
    description: 'AI agent specialized in data analysis and visualization',
    price: 0.15,
    creator: '0x456...def',
    longDescription: 'An advanced AI agent that specializes in data analysis and visualization. It can process large datasets, identify patterns, and create meaningful visualizations to help you understand your data better.',
    features: [
      'Data processing and cleaning',
      'Statistical analysis',
      'Pattern recognition',
      'Data visualization',
      'Report generation'
    ]
  },
  '3': {
    id: '3',
    name: 'Content Writer',
    description: 'AI agent that helps create engaging content',
    price: 0.08,
    creator: '0x789...ghi',
    longDescription: 'A creative AI agent that helps you generate high-quality content for various purposes. From blog posts to social media content, this agent can help you create engaging and SEO-friendly content.',
    features: [
      'Content generation',
      'SEO optimization',
      'Grammar and style checking',
      'Content planning',
      'Multiple content formats support'
    ]
  }
};

export default function AgentDetails({ params }: { params: { id: string } }) {
  const agent = mockAgents[params.id];

  if (!agent) {
    notFound();
  }

  return (
    <Page>
      <Page.Main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{agent.name}</h1>
          <p className="text-gray-600 text-lg mb-6">{agent.description}</p>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">About this Agent</h2>
            <p className="text-gray-700 mb-6">{agent.longDescription}</p>
            
            <h3 className="text-xl font-semibold mb-3">Features</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              {agent.features?.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            
            <div className="flex justify-between items-center border-t pt-6">
              <div>
                <p className="text-sm text-gray-500">Created by</p>
                <p className="font-medium">{agent.creator}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-2xl font-bold">{agent.price} ETH</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4">
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Save for Later
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Purchase Agent
            </button>
          </div>
        </div>
      </Page.Main>
    </Page>
  );
} 