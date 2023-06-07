import { createContext } from 'react';
import { Products, ProductInfo } from '@/types/types';

type CartCtx = {
  isCartOpen: boolean;
  toggleCart: () => void;
  cartProducts: Products;
  addProduct: (product: ProductInfo) => void;
  removeProduct: (id: number) => void;
  clearCart: () => void;
};

export const ShopCartContext = createContext<CartCtx>({
  isCartOpen: false,
  toggleCart: () => {},
  cartProducts: [],
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});
