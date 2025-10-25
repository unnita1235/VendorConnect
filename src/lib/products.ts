import type { Product, Vendor, Category } from '@/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const randomPrice = () => parseFloat((Math.random() * 100 + 20).toFixed(2));
const randomRating = () => parseFloat((Math.random() * 2 + 3).toFixed(1)); // 3.0 to 5.0
const randomReviewCount = () => Math.floor(Math.random() * 500 + 10);

const vendorData = {
  'FurniCo': { name: 'FurniCo', rating: 4.8, location: 'San Francisco, CA', description: 'Premium furniture and home decor' },
  'HomeGoods': { name: 'HomeGoods', rating: 4.6, location: 'New York, NY', description: 'Quality home essentials and decor' },
  'Techtronics': { name: 'Techtronics', rating: 4.9, location: 'Seattle, WA', description: 'Cutting-edge technology and electronics' },
  'ActiveWear': { name: 'ActiveWear', rating: 4.7, location: 'Portland, OR', description: 'Sports and fitness equipment' },
  'PhotoPro': { name: 'PhotoPro', rating: 4.8, location: 'Los Angeles, CA', description: 'Professional photography equipment' },
  'GreenThumb': { name: 'GreenThumb', rating: 4.5, location: 'Austin, TX', description: 'Plants and gardening supplies' },
  'Papyrus': { name: 'Papyrus', rating: 4.4, location: 'Boston, MA', description: 'Stationery and office supplies' },
  'Luxé': { name: 'Luxé', rating: 4.9, location: 'Miami, FL', description: 'Luxury fashion and accessories' },
  'TimeMaster': { name: 'TimeMaster', rating: 4.6, location: 'Chicago, IL', description: 'Premium watches and timepieces' },
  'Brewista': { name: 'Brewista', rating: 4.7, location: 'Seattle, WA', description: 'Coffee and brewing equipment' },
  'Artify': { name: 'Artify', rating: 4.5, location: 'Brooklyn, NY', description: 'Art and creative supplies' },
};

const categories = {
  'Furniture': ['Blue Armchair', 'Wooden Coffee Table'],
  'Electronics': ['Sleek Laptop', 'Pro Camera'],
  'Sports': ['Running Shoes'],
  'Home': ['Ceramic Mugs', 'Indoor Plant'],
  'Stationery': ['Leather Journal'],
  'Fashion': ['Designer Handbag', 'Classic Wristwatch'],
  'Kitchen': ['Coffee Grinder'],
  'Art': ['Abstract Painting'],
};

const placeholderProducts = PlaceHolderImages.map((img, index) => ({
  id: img.id,
  name: `Product ${index + 1}`,
  description: `This is a great description for Product ${index + 1}.`,
  price: randomPrice(),
  vendor: `Vendor ${String.fromCharCode(65 + (index % 4))}`,
  imageUrl: img.imageUrl,
  imageHint: img.imageHint,
  category: 'General',
  rating: randomRating(),
  reviewCount: randomReviewCount(),
  inStock: Math.random() > 0.1,
  tags: ['featured', 'new'],
  vendorInfo: {
    name: `Vendor ${String.fromCharCode(65 + (index % 4))}`,
    rating: 4.5,
    location: 'Unknown',
    description: 'Quality products',
  },
}));

export const products: Product[] = [
  { 
    ...placeholderProducts[0], 
    name: 'Blue Armchair', 
    description: 'A stylish and comfortable blue armchair for your living room. Perfect for relaxation and adds elegance to any space.', 
    vendor: 'FurniCo', 
    price: 299.99,
    category: 'Furniture',
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    tags: ['furniture', 'living room', 'comfortable'],
    vendorInfo: vendorData['FurniCo'],
  },
  { 
    ...placeholderProducts[1], 
    name: 'Wooden Coffee Table', 
    description: 'A modern coffee table made from solid oak. Handcrafted with attention to detail and sustainable materials.', 
    vendor: 'HomeGoods', 
    price: 149.50,
    category: 'Furniture',
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    tags: ['furniture', 'oak', 'modern'],
    vendorInfo: vendorData['HomeGoods'],
  },
  { 
    ...placeholderProducts[2], 
    name: 'Sleek Laptop', 
    description: 'A powerful and sleek laptop for work and play. Features the latest processor and stunning display.', 
    vendor: 'Techtronics', 
    price: 1299.00,
    category: 'Electronics',
    rating: 4.9,
    reviewCount: 234,
    inStock: true,
    tags: ['laptop', 'technology', 'portable'],
    vendorInfo: vendorData['Techtronics'],
  },
  { 
    ...placeholderProducts[3], 
    name: 'Running Shoes', 
    description: 'Lightweight and comfortable running shoes for your daily jog. Designed for performance and durability.', 
    vendor: 'ActiveWear', 
    price: 89.99,
    category: 'Sports',
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    tags: ['shoes', 'running', 'athletic'],
    vendorInfo: vendorData['ActiveWear'],
  },
  { 
    ...placeholderProducts[4], 
    name: 'Pro Camera', 
    description: 'A professional-grade DSLR camera with a versatile lens. Perfect for photography enthusiasts and professionals.', 
    vendor: 'PhotoPro', 
    price: 899.95,
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 98,
    inStock: true,
    tags: ['camera', 'photography', 'professional'],
    vendorInfo: vendorData['PhotoPro'],
  },
  { 
    ...placeholderProducts[5], 
    name: 'Ceramic Mugs', 
    description: 'A set of four beautifully crafted ceramic mugs. Perfect for your morning coffee or tea.', 
    vendor: 'HomeGoods', 
    price: 45.00,
    category: 'Home',
    rating: 4.6,
    reviewCount: 67,
    inStock: true,
    tags: ['mugs', 'ceramic', 'kitchen'],
    vendorInfo: vendorData['HomeGoods'],
  },
  { 
    ...placeholderProducts[6], 
    name: 'Indoor Plant', 
    description: 'A lush green indoor plant to brighten up any room. Low maintenance and air-purifying.', 
    vendor: 'GreenThumb', 
    price: 35.50,
    category: 'Home',
    rating: 4.5,
    reviewCount: 43,
    inStock: true,
    tags: ['plant', 'indoor', 'green'],
    vendorInfo: vendorData['GreenThumb'],
  },
  { 
    ...placeholderProducts[7], 
    name: 'Leather Journal', 
    description: 'A premium leather-bound journal for your thoughts and ideas. Handcrafted with genuine leather.', 
    vendor: 'Papyrus', 
    price: 29.99,
    category: 'Stationery',
    rating: 4.4,
    reviewCount: 78,
    inStock: true,
    tags: ['journal', 'leather', 'writing'],
    vendorInfo: vendorData['Papyrus'],
  },
  { 
    ...placeholderProducts[8], 
    name: 'Designer Handbag', 
    description: 'An elegant designer handbag for any occasion. Made with premium materials and attention to detail.', 
    vendor: 'Luxé', 
    price: 450.00,
    category: 'Fashion',
    rating: 4.9,
    reviewCount: 189,
    inStock: true,
    tags: ['handbag', 'designer', 'luxury'],
    vendorInfo: vendorData['Luxé'],
  },
  { 
    ...placeholderProducts[9], 
    name: 'Classic Wristwatch', 
    description: 'A timeless analog wristwatch with a leather strap. Swiss movement and elegant design.', 
    vendor: 'TimeMaster', 
    price: 199.99,
    category: 'Fashion',
    rating: 4.6,
    reviewCount: 112,
    inStock: true,
    tags: ['watch', 'classic', 'leather'],
    vendorInfo: vendorData['TimeMaster'],
  },
  { 
    ...placeholderProducts[10], 
    name: 'Coffee Grinder', 
    description: 'A manual burr grinder for the perfect cup of coffee. Consistent grind size for optimal flavor.', 
    vendor: 'Brewista', 
    price: 79.00,
    category: 'Kitchen',
    rating: 4.7,
    reviewCount: 95,
    inStock: true,
    tags: ['coffee', 'grinder', 'manual'],
    vendorInfo: vendorData['Brewista'],
  },
  { 
    ...placeholderProducts[11], 
    name: 'Abstract Painting', 
    description: 'A vibrant and colorful abstract painting on canvas. Original artwork by local artist.', 
    vendor: 'Artify', 
    price: 250.00,
    category: 'Art',
    rating: 4.5,
    reviewCount: 34,
    inStock: true,
    tags: ['painting', 'abstract', 'art'],
    vendorInfo: vendorData['Artify'],
  },
];

export const vendors: Vendor[] = Object.entries(vendorData).map(([name, data], index) => ({
  id: `vendor-${index + 1}`,
  name,
  description: data.description,
  rating: data.rating,
  location: data.location,
  logoUrl: `https://images.unsplash.com/photo-${1500000000000 + index * 1000000}?w=100&h=100&fit=crop&crop=face`,
  productCount: products.filter(p => p.vendor === name).length,
}));

export const categoriesData: Category[] = [
  { id: 'furniture', name: 'Furniture', description: 'Home and office furniture', icon: '🪑', productCount: products.filter(p => p.category === 'Furniture').length },
  { id: 'electronics', name: 'Electronics', description: 'Technology and gadgets', icon: '📱', productCount: products.filter(p => p.category === 'Electronics').length },
  { id: 'sports', name: 'Sports', description: 'Sports and fitness equipment', icon: '⚽', productCount: products.filter(p => p.category === 'Sports').length },
  { id: 'home', name: 'Home', description: 'Home decor and essentials', icon: '🏠', productCount: products.filter(p => p.category === 'Home').length },
  { id: 'stationery', name: 'Stationery', description: 'Office and writing supplies', icon: '📝', productCount: products.filter(p => p.category === 'Stationery').length },
  { id: 'fashion', name: 'Fashion', description: 'Clothing and accessories', icon: '👗', productCount: products.filter(p => p.category === 'Fashion').length },
  { id: 'kitchen', name: 'Kitchen', description: 'Kitchen and cooking supplies', icon: '🍳', productCount: products.filter(p => p.category === 'Kitchen').length },
  { id: 'art', name: 'Art', description: 'Art supplies and creative materials', icon: '🎨', productCount: products.filter(p => p.category === 'Art').length },
];

export const getProductsByCategory = (category: string) => 
  products.filter(product => product.category === category);

export const getProductsByVendor = (vendor: string) => 
  products.filter(product => product.vendor === vendor);

export const searchProducts = (query: string, filters?: any) => {
  let filteredProducts = products;
  
  if (query) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  }
  
  if (filters?.category) {
    filteredProducts = filteredProducts.filter(product => product.category === filters.category);
  }
  
  if (filters?.vendor) {
    filteredProducts = filteredProducts.filter(product => product.vendor === filters.vendor);
  }
  
  if (filters?.minPrice) {
    filteredProducts = filteredProducts.filter(product => product.price >= filters.minPrice);
  }
  
  if (filters?.maxPrice) {
    filteredProducts = filteredProducts.filter(product => product.price <= filters.maxPrice);
  }
  
  if (filters?.rating) {
    filteredProducts = filteredProducts.filter(product => product.rating >= filters.rating);
  }
  
  if (filters?.inStock) {
    filteredProducts = filteredProducts.filter(product => product.inStock);
  }
  
  return filteredProducts;
};

export const sortProducts = (products: Product[], sortBy: string): Product[] => {
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
};
