import { useContext, useState } from 'react';
import { Navigation } from './Navigation';
import CartSVG from '@/public/cart.svg';
import { ShopCart } from '@/components/ui/ShopCart';
import { ShopCartContext } from '@/context/shopCartContext';
import { useRouter } from 'next/router';
import { BurgerButton } from './BurgerButton';

export const Header = () => {
  const [isBurgerToggled, setToggleBurger] = useState(false);
  const { cartProducts, toggleCart, isCartOpen } = useContext(ShopCartContext);
  const { route } = useRouter();

  const handleToggleBurger = () => {
    if (isCartOpen) {
      toggleCart();
    }
    setToggleBurger(!isBurgerToggled);
  };

  const handleToggleCart = () => {
    if (isBurgerToggled) {
      setToggleBurger(!isBurgerToggled);
    }
    toggleCart();
  };

  return (
    <header className="border-b-2 border-slate-700 bg-slate-100 text-stone-800">
      <div className="flex justify-between items-center w-full py-4 max-w-7xl min-w-[320px] p-4 mx-auto">
        <p className="font-bold text-2xl">Header</p>
        <div className="flex items-center gap-5 relative">
          <BurgerButton
            isBurgerToggled={isBurgerToggled}
            handleToggleBurger={handleToggleBurger}
          />
          <Navigation isBurgerToggled={isBurgerToggled} />
          {route === '/shop' ? (
            <div className="flex gap-1">
              <button
                className="fill-stone-800 hover:fill-teal-500 w-9 h-9 hover:scale-110 ease-in-out duration-300"
                onClick={handleToggleCart}
              >
                <CartSVG />
              </button>
              <div className="w-5 h-5 text-xs leading-5 rounded-full bg-teal-500 flex items-center justify-center self-start">
                {cartProducts.length}
              </div>
              <ShopCart />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};
