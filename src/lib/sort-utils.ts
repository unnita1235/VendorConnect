import type { Product } from '@/types';

export function sortProducts(products: Product[], sortBy: string): Product[] {
  const sortedProducts = [...products];

  switch (sortBy) {
    case 'name-asc':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    
    case 'name-desc':
      return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    
    case 'price-asc':
      return sortedProducts.sort((a, b) => a.price - b.price);
    
    case 'price-desc':
      return sortedProducts.sort((a, b) => b.price - a.price);
    
    case 'rating-desc':
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    
    case 'rating-asc':
      return sortedProducts.sort((a, b) => a.rating - b.rating);
    
    case 'newest':
      // Assuming products with higher IDs are newer
      return sortedProducts.sort((a, b) => b.id.localeCompare(a.id));
    
    case 'oldest':
      // Assuming products with lower IDs are older
      return sortedProducts.sort((a, b) => a.id.localeCompare(b.id));
    
    default:
      return sortedProducts;
  }
}

export function getSortLabel(sortBy: string): string {
  const sortOptions = [
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'price-asc', label: 'Price (Low to High)' },
    { value: 'price-desc', label: 'Price (High to Low)' },
    { value: 'rating-desc', label: 'Highest Rated' },
    { value: 'rating-asc', label: 'Lowest Rated' },
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
  ];
  
  return sortOptions.find(option => option.value === sortBy)?.label || 'Default';
}
