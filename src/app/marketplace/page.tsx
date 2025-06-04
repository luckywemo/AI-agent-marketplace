'use client';

import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { FilterBar } from '@/components/FilterBar/FilterBar';
import { AgentCard } from '@/components/AgentCard/AgentCard';

// Mock data for AI agents
const mockAgents = [
  {
    id: 1,
    name: 'GPT-4 Assistant',
    description: 'Advanced language model for complex tasks',
    price: 0.1,
    category: 'Language',
    rating: 4.8,
    image: '/agents/gpt4.png'
  },
  {
    id: 2,
    name: 'DALL-E Creator',
    description: 'AI image generation and editing',
    price: 0.05,
    category: 'Image',
    rating: 4.7,
    image: '/agents/dalle.png'
  },
  {
    id: 3,
    name: 'Code Assistant',
    description: 'AI-powered coding and debugging',
    price: 0.15,
    category: 'Development',
    rating: 4.9,
    image: '/agents/code.png'
  }
];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1]);

  const filteredAgents = mockAgents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory;
    const matchesPrice = agent.price >= priceRange[0] && agent.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI Agent Marketplace</h1>
      
      <div className="mb-8">
        <SearchBar 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search AI agents..."
        />
      </div>

      <div className="mb-8">
        <FilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
} 