import { clsx } from 'clsx';

interface CategoryPillProps {
  name: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function CategoryPill({ name, isActive = false, onClick }: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
        isActive
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      )}
    >
      {name}
    </button>
  );
} 