'use client';

import { useState, useMemo } from 'react';
import { products, searchProducts, sortProducts } from '@/lib/products';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/product-card';
import { VendorSearch } from '@/components/vendor-search';
import { ProductSearch } from '@/components/product-search';
import { CategoryNav } from '@/components/category-nav';
import { VendorShowcase } from '@/components/vendor-showcase';
import { ProductSort } from '@/components/product-sort';
import { ProductDetailsModal } from '@/components/product-details-modal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Star, Users, Package } from 'lucide-react';
import type { Product, SearchFilters } from '@/types';

export default function Home() {
  const [searchResults, setSearchResults] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVendor, setSelectedVendor] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('newest');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('products');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = searchResults;
    
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    if (selectedVendor) {
      filtered = filtered.filter(product => product.vendor === selectedVendor);
    }
    
    return sortProducts(filtered, sortBy);
  }, [searchResults, selectedCategory, selectedVendor, sortBy]);

  const handleSearchResults = (results: Product[]) => {
    setSearchResults(results);
    setSelectedCategory(null);
    setSelectedVendor(null);
  };

  const handleFiltersChange = (filters: SearchFilters) => {
    // This will be handled by the ProductSearch component
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setSelectedVendor(null);
  };

  const handleVendorSelect = (vendor: string | null) => {
    setSelectedVendor(vendor);
    setSelectedCategory(null);
  };

  const handleProductView = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const stats = [
    { label: 'Products', value: products.length, icon: Package },
    { label: 'Vendors', value: new Set(products.map(p => p.vendor)).size, icon: Users },
    { label: 'Avg Rating', value: (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1), icon: Star },
    { label: 'Categories', value: new Set(products.map(p => p.category)).size, icon: TrendingUp },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 md:px-6 md:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              Curated Collections, Trusted Vendors
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover unique products from our network of independent sellers.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Search */}
          <div className="my-8">
            <VendorSearch />
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-secondary/50 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
                <TabsTrigger value="vendors">Vendors</TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="space-y-6">
                {/* Search and Filters */}
                <ProductSearch 
                  onSearchResults={handleSearchResults}
                  onFiltersChange={handleFiltersChange}
                />

                {/* Sort and Results Count */}
                <ProductSort 
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  productCount={filteredAndSortedProducts.length}
                />

                {/* Active Filters */}
                {(selectedCategory || selectedVendor) && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Active filters:</span>
                    {selectedCategory && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Category: {selectedCategory}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0"
                          onClick={() => setSelectedCategory(null)}
                        >
                          ×
                        </Button>
                      </Badge>
                    )}
                    {selectedVendor && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Vendor: {selectedVendor}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0"
                          onClick={() => setSelectedVendor(null)}
                        >
                          ×
                        </Button>
                      </Badge>
                    )}
                  </div>
                )}

                {/* Products Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredAndSortedProducts.map((product: Product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product}
                      onViewDetails={handleProductView}
                    />
                  ))}
                </div>

                {filteredAndSortedProducts.length === 0 && (
                  <div className="text-center py-12">
                    <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No products found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search criteria or filters.
                    </p>
                    <Button onClick={() => {
                      setSearchResults(products);
                      setSelectedCategory(null);
                      setSelectedVendor(null);
                    }}>
                      Show All Products
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="categories">
                <CategoryNav 
                  onCategorySelect={handleCategorySelect}
                  selectedCategory={selectedCategory}
                />
              </TabsContent>

              <TabsContent value="vendors">
                <VendorShowcase 
                  onVendorSelect={handleVendorSelect}
                  selectedVendor={selectedVendor}
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => {
          setIsProductModalOpen(false);
          setSelectedProduct(null);
        }}
      />

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground md:px-6">
          &copy; {new Date().getFullYear()} VendorConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
