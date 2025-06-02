'use client';

import { Page } from '@/components/PageLayout';
import { AgentCard } from '@/components/AgentCard/AgentCard';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { FilterBar, FilterOptions } from '@/components/FilterBar/FilterBar';
import { useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';

interface Agent {
  id: string;
  name: string;
  description: string;
  price: number;
  creator: string;
  category: string;
}

const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Code Assistant',
    description: 'An AI agent that helps with coding tasks and debugging',
    price: 0.1,
    creator: '0x123...abc',
    category: 'Code Assistant'
  },
  {
    id: '2',
    name: 'Data Analyst',
    description: 'AI agent specialized in data analysis and visualization',
    price: 0.15,
    creator: '0x456...def',
    category: 'Data Analysis'
  },
  {
    id: '3',
    name: 'Content Writer',
    description: 'AI agent that helps create engaging content',
    price: 0.08,
    creator: '0x789...ghi',
    category: 'Content Creation'
  }
];

export default function Marketplace() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'All',
    minPrice: 0,
    maxPrice: 1
  });

  const handleViewDetails = (id: string) => {
    router.push(`/marketplace/${id}`);
  };

  const filteredAgents = useMemo(() => {
    return mockAgents.filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = filters.category === 'All' || agent.category === filters.category;
      
      const matchesPrice = agent.price >= filters.minPrice && agent.price <= filters.maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, filters]);

  return (
    <Page>
      <Page.Main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">AI Agent Marketplace</h1>
        
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} className="mb-6" />
          <FilterBar onFilterChange={setFilters} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              {...agent}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No agents found matching your criteria.</p>
          </div>
        )}
      </Page.Main>
    </Page>
  );
} 