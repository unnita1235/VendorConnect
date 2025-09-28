'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  vendorAwareProductSearch,
  type VendorAwareProductSearchOutput,
} from '@/ai/flows/vendor-aware-product-search';
import { vendors } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Sparkles, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const searchSchema = z.object({
  searchQuery: z.string().min(3, 'Please enter at least 3 characters.'),
});

type SearchFormValues = z.infer<typeof searchSchema>;

export function VendorSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<VendorAwareProductSearchOutput | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit: SubmitHandler<SearchFormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const aiResult = await vendorAwareProductSearch({
        searchQuery: data.searchQuery,
        currentVendors: vendors,
      });
      setResult(aiResult);
      setIsDialogOpen(true);
    } catch (error) {
      console.error('AI search failed:', error);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <>
      <div className="mx-auto max-w-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-start gap-2"
        >
          <div className="flex-1">
            <div className="relative">
              <Sparkles className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                {...register('searchQuery')}
                placeholder="Search with AI for vendor-specific products..."
                className="pl-10"
                aria-label="AI Product Search"
              />
            </div>
            {errors.searchQuery && (
              <p className="mt-1 text-sm text-destructive">
                {errors.searchQuery.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              'Search'
            )}
          </Button>
        </form>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          AI will recommend products based on your search and currently
          available vendors.
        </p>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
              <Sparkles className="h-6 w-6 text-accent" />
              AI Product Recommendations
            </DialogTitle>
            <DialogDescription>
              Based on your search, here are some recommended products:
            </DialogDescription>
          </DialogHeader>
          {result && (
            <div className="mt-4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5">
                    {result.recommendedProducts.map((product, index) => (
                      <li key={index}>{product}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Reasoning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {result.reasoning}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
