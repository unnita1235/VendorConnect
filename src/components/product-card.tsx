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
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Heart, Eye } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

type ProductCardProps = {
  product: Product;
  onViewDetails?: (product: Product) => void;
};

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { dispatch } = useCart();
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast({
      title: 'Added to cart!',
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onViewDetails) {
      onViewDetails(product);
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? 'Removed from favorites' : 'Added to favorites',
      description: `${product.name} ${isLiked ? 'removed from' : 'added to'} your favorites.`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-0 relative">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={product.imageHint}
          />
          
          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 bg-white/90 hover:bg-white"
                onClick={handleLike}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 bg-white/90 hover:bg-white"
                onClick={handleViewDetails}
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stock status */}
          {!product.inStock && (
            <div className="absolute top-2 left-2">
              <Badge variant="destructive" className="text-xs">
                Out of Stock
              </Badge>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute bottom-2 left-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{product.vendor}</p>
            <div className="flex items-center gap-1">
              {renderStars(product.rating)}
              <span className="text-xs text-muted-foreground ml-1">
                ({product.reviewCount})
              </span>
            </div>
          </div>
          
          <CardTitle className="mb-2 line-clamp-2 h-[3rem] text-lg font-semibold">
            {product.name}
          </CardTitle>
          
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {product.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-2">
            {product.tags.slice(0, 2).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {product.tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{product.tags.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="flex flex-col">
          <p className="text-xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>
          {product.vendorInfo && (
            <p className="text-xs text-muted-foreground">
              {product.vendorInfo.location}
            </p>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button
            onClick={handleViewDetails}
            variant="outline"
            size="sm"
            className="hidden sm:flex"
          >
            <Eye className="mr-1 h-4 w-4" />
            View
          </Button>
          <Button
            onClick={handleAddToCart}
            size="sm"
            disabled={!product.inStock}
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            variant="outline"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
