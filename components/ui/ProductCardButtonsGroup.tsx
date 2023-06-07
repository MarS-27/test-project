import { FC, useState } from 'react';
import { ProductInfo } from '@/types/types';
import AddCartSVG from '@/public/cartAdd.svg';
import RemoveCartSVG from '@/public/cartRemove.svg';
import { useContext, useEffect } from 'react';
import { ShopCartContext } from '@/context/shopCartContext';
import clsx from 'clsx';

type ButtonsGroupProps = {
  product: ProductInfo;
  isOpenDescription: boolean;
  toggleDescription: () => void;
};

type CartButtonVariant = 'add' | 'remove';

export const CardButtonsGroup: FC<ButtonsGroupProps> = ({
  product,
  isOpenDescription,
  toggleDescription,
}) => {
  const [buttonVariant, setButtonVariant] = useState<CartButtonVariant>('add');

  const { addProduct, removeProduct, cartProducts } =
    useContext(ShopCartContext);

  const checkProductInCart = cartProducts.find(
    (item) => item.id === product.id,
  );

  const handleToggleProduct = () => {
    if (buttonVariant === 'add') {
      addProduct(product);
      setButtonVariant('remove');
    } else {
      removeProduct(product.id);
      setButtonVariant('add');
    }
  };

  useEffect(() => {
    if (!checkProductInCart) {
      setButtonVariant('add');
    }
  }, [checkProductInCart]);

  return (
    <div className="w-full flex items-center justify-between gap-3">
      <button
        className="w-4/5 h-9 rounded-lg bg-zinc-400 p-1 hover:bg-teal-300 ease-out duration-500"
        onClick={toggleDescription}
      >
        {isOpenDescription ? 'Less' : 'More'}
      </button>
      <button
        className={clsx(
          'w-9 h-9 hover:scale-110 ease-in-out duration-300',
          buttonVariant === 'add'
            ? 'fill-stone-800 hover:fill-teal-500'
            : 'fill-teal-500 hover:fill-stone-800',
        )}
        onClick={handleToggleProduct}
      >
        {buttonVariant === 'add' ? <AddCartSVG /> : <RemoveCartSVG />}
      </button>
    </div>
  );
};
