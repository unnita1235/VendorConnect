export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  vendor: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  tags: string[];
  vendorInfo: {
    name: string;
    rating: number;
    location: string;
    description: string;
  };
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Vendor = {
  id: string;
  name: string;
  description: string;
  rating: number;
  location: string;
  logoUrl: string;
  productCount: number;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
};

export type SearchFilters = {
  category?: string;
  vendor?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStock?: boolean;
};
