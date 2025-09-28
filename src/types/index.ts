export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  vendor: string;
  imageUrl: string;
  imageHint: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
