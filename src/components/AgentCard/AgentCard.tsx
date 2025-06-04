'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Agent {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  image: string;
}

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/marketplace/${agent.id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={agent.image}
          alt={agent.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{agent.name}</h3>
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {agent.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {agent.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-sm text-gray-600">{agent.rating}</span>
          </div>
          <div className="text-lg font-semibold text-blue-600">
            {agent.price} ETH
          </div>
        </div>
      </div>
    </div>
  );
} 