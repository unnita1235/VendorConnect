'use client';

import { useState } from 'react';
import { categoriesData } from '@/lib/products';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

type CategoryNavProps = {
  onCategorySelect: (category: string | null) => void;
  selectedCategory?: string | null;
};

export function CategoryNav({ onCategorySelect, selectedCategory }: CategoryNavProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Categories</h3>
            <Button
              variant={selectedCategory === null ? "default" : "ghost"}
              size="sm"
              onClick={() => onCategorySelect(null)}
              className="text-xs"
            >
              All Products
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categoriesData.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? "default" : "outline"}
                className="h-auto p-3 flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                onClick={() => onCategorySelect(category.name)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="text-2xl">{category.icon}</div>
                <div className="text-center">
                  <div className="font-medium text-xs">{category.name}</div>
                  <Badge variant="secondary" className="text-xs mt-1">
                    {category.productCount}
                  </Badge>
                </div>
                {hoveredCategory === category.id && (
                  <div className="absolute top-0 right-0 -mt-1 -mr-1">
                    <ChevronRight className="h-3 w-3" />
                  </div>
                )}
              </Button>
            ))}
          </div>
          
          {selectedCategory && (
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                Showing products in: <span className="font-medium">{selectedCategory}</span>
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
