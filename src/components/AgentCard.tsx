import { Star } from 'iconoir-react';
import { clsx } from 'clsx';

interface Agent {
  id: number;
  name: string;
  description: string;
  category: string;
  rating: number;
  usageCount: number;
}

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{agent.name}</h3>
        <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
          {agent.category}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{agent.description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>{agent.rating}</span>
        </div>
        <span>{agent.usageCount.toLocaleString()} uses</span>
      </div>
      
      <button
        className={clsx(
          "mt-4 w-full py-2 px-4 rounded-md",
          "bg-blue-600 text-white hover:bg-blue-700",
          "transition-colors duration-200"
        )}
      >
        Use Agent
      </button>
    </div>
  );
} 