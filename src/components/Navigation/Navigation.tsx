import Link from 'next/link';
import { clsx } from 'clsx';
import { Home, Search, Plus } from 'iconoir-react';

export function Navigation() {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              AI Marketplace
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={clsx(
                "flex items-center gap-2 text-gray-600 hover:text-blue-600",
                "transition-colors duration-200"
              )}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>

            <Link
              href="/search"
              className={clsx(
                "flex items-center gap-2 text-gray-600 hover:text-blue-600",
                "transition-colors duration-200"
              )}
            >
              <Search className="w-5 h-5" />
              <span>Search</span>
            </Link>

            <Link
              href="/create"
              className={clsx(
                "flex items-center gap-2 text-gray-600 hover:text-blue-600",
                "transition-colors duration-200"
              )}
            >
              <Plus className="w-5 h-5" />
              <span>Create Agent</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 