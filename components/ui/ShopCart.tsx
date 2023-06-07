import { useContext, Fragment } from 'react';
import { ShopCartContext } from '@/context/shopCartContext';
import { ShopCartItem } from './ShopCartItem';
import { Transition } from '@headlessui/react';

export const ShopCart = () => {
  const { cartProducts, clearCart, isCartOpen } = useContext(ShopCartContext);

  return (
    <Transition
      as={Fragment}
      show={isCartOpen}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-175"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div className="flex flex-col gap-5 min-w-[300px] absolute top-[110%] right-0 p-3 border-2 border-zinc-200 bg-white z-50">
        {cartProducts.length ? (
          <>
            {cartProducts.map((product) => (
              <ShopCartItem key={product.id} product={product} />
            ))}
            <button
              className="self-center w-52 h-9 border-2 border-slate-400 p-1 hover:bg-teal-300 ease-out duration-500"
              onClick={clearCart}
            >
              Clear cart
            </button>
          </>
        ) : (
          <p className="text-center font-bold text-2xl">Cart is empty!</p>
        )}
      </div>
    </Transition>
  );
};
