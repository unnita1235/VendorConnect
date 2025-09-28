'use client';

import type { CartItem, Product } from '@/types';
import { createContext, useReducer, ReactNode, useEffect, useMemo } from 'react';

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string } // productId
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { product: action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => item.product.id !== action.payload.productId
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

const getInitialState = (): CartState => {
    if (typeof window === 'undefined') {
        return { items: [] };
    }
    try {
        const storedCart = localStorage.getItem('vendorconnect-cart');
        return storedCart ? JSON.parse(storedCart) : { items: [] };
    } catch (error) {
        console.error('Error reading from localStorage', error);
        return { items: [] };
    }
};

export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, getInitialState());
  
  useEffect(() => {
    try {
        localStorage.setItem('vendorconnect-cart', JSON.stringify(state));
    } catch (error) {
        console.error('Error writing to localStorage', error);
    }
  }, [state]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
