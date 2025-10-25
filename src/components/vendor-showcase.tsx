'use client';

import { vendors } from '@/lib/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, ExternalLink } from 'lucide-react';
import Image from 'next/image';

type VendorShowcaseProps = {
  onVendorSelect: (vendor: string | null) => void;
  selectedVendor?: string | null;
};

export function VendorShowcase({ onVendorSelect, selectedVendor }: VendorShowcaseProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Our Trusted Vendors</span>
          <Button
            variant={selectedVendor === null ? "default" : "ghost"}
            size="sm"
            onClick={() => onVendorSelect(null)}
          >
            View All
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vendors.map((vendor) => (
            <Card
              key={vendor.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedVendor === vendor.name ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => onVendorSelect(vendor.name)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={vendor.logoUrl}
                      alt={vendor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{vendor.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {vendor.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{vendor.rating}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {vendor.productCount} products
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{vendor.location}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    // In a real app, this would navigate to vendor's store
                    console.log(`Visit ${vendor.name}'s store`);
                  }}
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Visit Store
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
