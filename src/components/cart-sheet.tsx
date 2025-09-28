'use client';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { Minus, Plus, Trash2, ExternalLink } from 'lucide-react';
import { Separator } from './ui/separator';
import { useToast } from '@/hooks/use-toast';

type CartSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { state, dispatch } = useCart();
  const { toast } = useToast();

  const total = state.items
    .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    toast({
      title: 'Redirecting to vendors...',
      description:
        "This is a demo. You would now be redirected to vendors' sites.",
    });
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-headline text-2xl">
            Shopping Cart
          </SheetTitle>
        </SheetHeader>
        <Separator />
        {state.items.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-muted-foreground">Your cart is empty.</p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 pr-4">
              <div className="flex flex-col gap-6 py-4">
                {state.items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-center gap-4">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="rounded-md object-cover"
                      data-ai-hint={product.imageHint}
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {product.vendor}
                      </p>
                      <p className="text-sm font-medium">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: {
                              productId: product.id,
                              quantity: quantity - 1,
                            },
                          })
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          dispatch({ type: 'ADD_ITEM', payload: product })
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() =>
                        dispatch({ type: 'REMOVE_ITEM', payload: product.id })
                      }
                      aria-label={`Remove ${product.name} from cart`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Separator />
            <SheetFooter className="mt-4">
              <div className="flex w-full flex-col gap-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <SheetClose asChild>
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Proceed to Checkout
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </SheetClose>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
