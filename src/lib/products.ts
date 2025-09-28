import type { Product } from '@/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const randomPrice = () => parseFloat((Math.random() * 100 + 20).toFixed(2));

const placeholderProducts = PlaceHolderImages.map((img, index) => ({
  id: img.id,
  name: `Product ${index + 1}`,
  description: `This is a great description for Product ${index + 1}.`,
  price: randomPrice(),
  vendor: `Vendor ${String.fromCharCode(65 + (index % 4))}`, // Vendor A, B, C, D
  imageUrl: img.imageUrl,
  imageHint: img.imageHint,
}));

export const products: Product[] = [
  { ...placeholderProducts[0], name: 'Blue Armchair', description: 'A stylish and comfortable blue armchair for your living room.', vendor: 'FurniCo', price: 299.99 },
  { ...placeholderProducts[1], name: 'Wooden Coffee Table', description: 'A modern coffee table made from solid oak.', vendor: 'HomeGoods', price: 149.50 },
  { ...placeholderProducts[2], name: 'Sleek Laptop', description: 'A powerful and sleek laptop for work and play.', vendor: 'Techtronics', price: 1299.00 },
  { ...placeholderProducts[3], name: 'Running Shoes', description: 'Lightweight and comfortable running shoes for your daily jog.', vendor: 'ActiveWear', price: 89.99 },
  { ...placeholderProducts[4], name: 'Pro Camera', description: 'A professional-grade DSLR camera with a versatile lens.', vendor: 'PhotoPro', price: 899.95 },
  { ...placeholderProducts[5], name: 'Ceramic Mugs', description: 'A set of four beautifully crafted ceramic mugs.', vendor: 'HomeGoods', price: 45.00 },
  { ...placeholderProducts[6], name: 'Indoor Plant', description: 'A lush green indoor plant to brighten up any room.', vendor: 'GreenThumb', price: 35.50 },
  { ...placeholderProducts[7], name: 'Leather Journal', description: 'A premium leather-bound journal for your thoughts and ideas.', vendor: 'Papyrus', price: 29.99 },
  { ...placeholderProducts[8], name: 'Designer Handbag', description: 'An elegant designer handbag for any occasion.', vendor: 'Luxé', price: 450.00 },
  { ...placeholderProducts[9], name: 'Classic Wristwatch', description: 'A timeless analog wristwatch with a leather strap.', vendor: 'TimeMaster', price: 199.99 },
  { ...placeholderProducts[10], name: 'Coffee Grinder', description: 'A manual burr grinder for the perfect cup of coffee.', vendor: 'Brewista', price: 79.00 },
  { ...placeholderProducts[11], name: 'Abstract Painting', description: 'A vibrant and colorful abstract painting on canvas.', vendor: 'Artify', price: 250.00 },
];

export const vendors = [...new Set(products.map(p => p.vendor))];
