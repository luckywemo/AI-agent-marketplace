import { clsx } from 'clsx';

export interface FilterOptions {
  category: string;
  minPrice: number;
  maxPrice: number;
}

interface FilterBarProps {
  onFilterChange: (filters: FilterOptions) => void;
  className?: string;
}

const categories = [
  'All',
  'Code Assistant',
  'Data Analysis',
  'Content Creation',
  'Research',
  'Other'
];

export function FilterBar({ onFilterChange, className }: FilterBarProps) {
  const handleCategoryChange = (category: string) => {
    onFilterChange({
      category,
      minPrice: 0,
      maxPrice: 1
    });
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    onFilterChange({
      category: 'All',
      minPrice: min,
      maxPrice: max
    });
  };

  return (
    <div className={clsx('space-y-4', className)}>
      <div>
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className="px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Price Range (ETH)</h3>
        <div className="flex items-center gap-4">
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Min"
            onChange={(e) => handlePriceRangeChange(Number(e.target.value), 1)}
            className="w-24 px-2 py-1 border border-gray-300 rounded"
          />
          <span>to</span>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Max"
            onChange={(e) => handlePriceRangeChange(0, Number(e.target.value))}
            className="w-24 px-2 py-1 border border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  );
} 