'use client';

import { clsx } from 'clsx';

export interface FilterOptions {
  category: string;
  minPrice: number;
  maxPrice: number;
}

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  className?: string;
}

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'Language', name: 'Language' },
  { id: 'Image', name: 'Image' },
  { id: 'Development', name: 'Development' },
  { id: 'Data', name: 'Data Analysis' },
  { id: 'Content', name: 'Content Creation' }
];

export function FilterBar({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  className
}: FilterBarProps) {
  return (
    <div className={clsx('flex flex-col md:flex-row gap-4', className)}>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range (ETH)
        </label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-500">to</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
} 