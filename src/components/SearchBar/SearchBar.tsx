import { useState } from 'react';
import { clsx } from 'clsx';

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string;
}

export function SearchBar({ onSearch, className }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={clsx('w-full max-w-2xl', className)}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for AI agents..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
} 