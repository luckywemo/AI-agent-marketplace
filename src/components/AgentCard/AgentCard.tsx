import { clsx } from 'clsx';

export interface AgentCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  creator: string;
  className?: string;
  onViewDetails?: (id: string) => void;
}

export function AgentCard({
  id,
  name,
  description,
  price,
  creator,
  className,
  onViewDetails
}: AgentCardProps) {
  return (
    <div
      className={clsx(
        'border rounded-lg p-6 hover:shadow-lg transition-shadow',
        className
      )}
    >
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">{price} ETH</span>
        <button
          onClick={() => onViewDetails?.(id)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          View Details
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2">Created by: {creator}</p>
    </div>
  );
} 