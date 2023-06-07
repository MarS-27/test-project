import { Products, ProductInfo } from '@/types/types';
import { FC, useState, ReactNode } from 'react';
import { ShopCartContext } from './shopCartContext';

type CartContextProviderProps = {
  children: ReactNode;
};

export const ShopCartContextProvider: FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cartProducts, setCartProducts] = useState<Products>([]);
  const [isCartOpen, setToggleCart] = useState(false);

  const toggleCart = () => setToggleCart(!isCartOpen);

  const addProduct = (product: ProductInfo) => {
    setCartProducts([...cartProducts, product]);
  };

  const removeProduct = (id: number) => {
    setCartProducts(cartProducts.filter((product) => id !== product.id));
  };

  const clearCart = () => {
    setCartProducts([]);
    setToggleCart(false);
  };

  const contextValue = {
    isCartOpen,
    toggleCart,
    cartProducts,
    addProduct,
    removeProduct,
    clearCart,
  };

  return (
    <ShopCartContext.Provider value={contextValue}>
      {children}
    </ShopCartContext.Provider>
  );
};
