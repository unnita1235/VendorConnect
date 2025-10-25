'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

export type SortOption = {
  value: string;
  label: string;
  direction?: 'asc' | 'desc';
};

const sortOptions: SortOption[] = [
  { value: 'name-asc', label: 'Name (A-Z)', direction: 'asc' },
  { value: 'name-desc', label: 'Name (Z-A)', direction: 'desc' },
  { value: 'price-asc', label: 'Price (Low to High)', direction: 'asc' },
  { value: 'price-desc', label: 'Price (High to Low)', direction: 'desc' },
  { value: 'rating-desc', label: 'Highest Rated', direction: 'desc' },
  { value: 'rating-asc', label: 'Lowest Rated', direction: 'asc' },
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
];

type ProductSortProps = {
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  productCount: number;
};

export function ProductSort({ sortBy, onSortChange, productCount }: ProductSortProps) {
  const selectedOption = sortOptions.find(option => option.value === sortBy);
  
  const getSortIcon = () => {
    if (!selectedOption) return <ArrowUpDown className="h-4 w-4" />;
    if (selectedOption.direction === 'asc') return <ArrowUp className="h-4 w-4" />;
    if (selectedOption.direction === 'desc') return <ArrowDown className="h-4 w-4" />;
    return <ArrowUpDown className="h-4 w-4" />;
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="text-sm text-muted-foreground">
        {productCount} product{productCount !== 1 ? 's' : ''} found
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Sort by:</span>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[200px]">
            <div className="flex items-center gap-2">
              {getSortIcon()}
              <SelectValue placeholder="Sort products" />
            </div>
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex items-center gap-2">
                  {option.direction === 'asc' && <ArrowUp className="h-3 w-3" />}
                  {option.direction === 'desc' && <ArrowDown className="h-3 w-3" />}
                  {!option.direction && <ArrowUpDown className="h-3 w-3" />}
                  {option.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
