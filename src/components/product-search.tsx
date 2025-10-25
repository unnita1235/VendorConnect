'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { products, vendors, categoriesData, searchProducts } from '@/lib/products';
import type { SearchFilters } from '@/types';

type ProductSearchProps = {
  onSearchResults: (results: typeof products) => void;
  onFiltersChange: (filters: SearchFilters) => void;
};

export function ProductSearch({ onSearchResults, onFiltersChange }: ProductSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const searchResults = useMemo(() => {
    return searchProducts(searchQuery, filters);
  }, [searchQuery, filters]);

  const handleSearch = () => {
    onSearchResults(searchResults);
  };

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
    onSearchResults(searchProducts(searchQuery, newFilters));
  };

  const clearFilters = () => {
    setFilters({});
    onFiltersChange({});
    onSearchResults(searchProducts(searchQuery, {}));
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5" />
          Search Products
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search Input */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products, brands, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <Button onClick={handleSearch} className="px-6">
            Search
          </Button>
        </div>

        {/* Filters Toggle */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
          {activeFiltersCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear All
            </Button>
          )}
        </div>

        {/* Filters Panel */}
        <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
          <CollapsibleContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select
                  value={filters.category || ''}
                  onValueChange={(value) => handleFilterChange('category', value || undefined)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categoriesData.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.icon} {category.name} ({category.productCount})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Vendor Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Vendor</label>
                <Select
                  value={filters.vendor || ''}
                  onValueChange={(value) => handleFilterChange('vendor', value || undefined)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Vendors" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Vendors</SelectItem>
                    {vendors.map((vendor) => (
                      <SelectItem key={vendor.id} value={vendor.name}>
                        {vendor.name} ({vendor.productCount})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Price Range</label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice || ''}
                      onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
                      className="text-sm"
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice || ''}
                      onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Minimum Rating</label>
                <Select
                  value={filters.rating?.toString() || ''}
                  onValueChange={(value) => handleFilterChange('rating', value ? Number(value) : undefined)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Rating</SelectItem>
                    <SelectItem value="4.5">4.5+ Stars</SelectItem>
                    <SelectItem value="4.0">4.0+ Stars</SelectItem>
                    <SelectItem value="3.5">3.5+ Stars</SelectItem>
                    <SelectItem value="3.0">3.0+ Stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Stock Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Availability</label>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="inStock"
                    checked={filters.inStock || false}
                    onCheckedChange={(checked) => handleFilterChange('inStock', checked)}
                  />
                  <label htmlFor="inStock" className="text-sm">
                    In Stock Only
                  </label>
                </div>
              </div>
            </div>

            {/* Active Filters Display */}
            {activeFiltersCount > 0 && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Active Filters:</label>
                <div className="flex flex-wrap gap-2">
                  {filters.category && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Category: {filters.category}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => handleFilterChange('category', undefined)}
                      />
                    </Badge>
                  )}
                  {filters.vendor && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Vendor: {filters.vendor}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => handleFilterChange('vendor', undefined)}
                      />
                    </Badge>
                  )}
                  {filters.minPrice && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Min: ${filters.minPrice}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => handleFilterChange('minPrice', undefined)}
                      />
                    </Badge>
                  )}
                  {filters.maxPrice && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Max: ${filters.maxPrice}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => handleFilterChange('maxPrice', undefined)}
                      />
                    </Badge>
                  )}
                  {filters.rating && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Rating: {filters.rating}+
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => handleFilterChange('rating', undefined)}
                      />
                    </Badge>
                  )}
                  {filters.inStock && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      In Stock
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => handleFilterChange('inStock', undefined)}
                      />
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>

        {/* Search Results Count */}
        <div className="text-sm text-muted-foreground">
          {searchResults.length} product{searchResults.length !== 1 ? 's' : ''} found
        </div>
      </CardContent>
    </Card>
  );
}
