import { products } from '@/lib/products';
import { Header } from '@/components/header';
import { ProductCard } from '@/components/product-card';
import { VendorSearch } from '@/components/vendor-search';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-8 md:px-6 md:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              Curated Collections, Trusted Vendors
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover unique products from our network of independent sellers.
            </p>
          </div>
          <div className="my-8">
            <VendorSearch />
          </div>
        </section>
        <section className="bg-secondary/50 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h3 className="font-headline mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
              Featured Products
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground md:px-6">
          &copy; {new Date().getFullYear()} VendorConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
