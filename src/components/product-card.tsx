'use client';
import type { Product } from '@/types';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast({
      title: 'Added to cart!',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="flex h-full transform flex-col overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={product.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <p className="text-sm text-muted-foreground">{product.vendor}</p>
        <CardTitle className="mb-2 mt-1 line-clamp-2 h-[3rem] text-lg font-semibold">
          {product.name}
        </CardTitle>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <p className="text-xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
        <Button
          onClick={handleAddToCart}
          size="sm"
          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          variant="outline"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
