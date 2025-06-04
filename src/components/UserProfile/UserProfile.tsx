'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAccount } from 'wagmi';

interface PurchasedAgent {
  id: number;
  name: string;
  image: string;
  purchaseDate: string;
  lastUsed: string;
}

// Mock data - In a real app, this would come from an API
const mockPurchasedAgents: PurchasedAgent[] = [
  {
    id: 1,
    name: 'GPT-4 Assistant',
    image: '/agents/gpt4.png',
    purchaseDate: '2024-03-15',
    lastUsed: '2024-03-20'
  },
  {
    id: 2,
    name: 'DALL-E Creator',
    image: '/agents/dalle.png',
    purchaseDate: '2024-03-10',
    lastUsed: '2024-03-19'
  }
];

export function UserProfile() {
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState<'agents' | 'settings'>('agents');

  if (!address) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Please connect your wallet to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold mb-2">My Profile</h1>
              <p className="text-gray-600">
                {address.slice(0, 6)}...{address.slice(-4)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('agents')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'agents'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                My Agents
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'settings'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Settings
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'agents' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockPurchasedAgents.map(agent => (
                  <div
                    key={agent.id}
                    className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={agent.image}
                        alt={agent.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{agent.name}</h3>
                      <p className="text-sm text-gray-500">
                        Purchased: {new Date(agent.purchaseDate).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        Last used: {new Date(agent.lastUsed).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
                  <div className="space-y-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Email notifications for new features
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Updates about purchased agents
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
                  <div className="space-y-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Show my activity status
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Allow agent usage analytics
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 