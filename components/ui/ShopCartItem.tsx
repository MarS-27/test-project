import { useContext, useState, FC } from 'react';
import { ShopCartContext } from '@/context/shopCartContext';
import Image from 'next/image';
import RemoveCartSVG from '@/public/cartRemove.svg';
import { ProductInfo } from '@/types/types';
import { CartItemButton } from './CartItemButton';
import clsx from 'clsx';

type CartItemProps = {
  product: ProductInfo;
};

export const ShopCartItem: FC<CartItemProps> = ({ product }) => {
  const [isShowTitle, setToggleTitle] = useState(false);
  const [productCount, setProductCount] = useState(1);

  const { removeProduct } = useContext(ShopCartContext);

  return (
    <div className="flex justify-between gap-3">
      <div className="flex items-center gap-3">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="w-12 min-w-[48px] h-12 object-contain"
        />
        <p
          className={clsx(
            'cursor-help text-xs',
            isShowTitle ? 'line-clamp-none' : 'line-clamp-1',
          )}
          onMouseEnter={() => setToggleTitle(true)}
          onMouseLeave={() => setToggleTitle(false)}
        >
          {product.title}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex gap-2">
          <CartItemButton
            variant="decr"
            productCount={productCount}
            setProductCount={setProductCount}
          />
          <input
            value={productCount}
            type="text"
            size={productCount.toString().length}
            onChange={(e) =>
              e.target.value
                ? setProductCount(parseInt(e.target.value))
                : setProductCount(0)
            }
            className="py-1 text-center border border-slate-400 focus:outline-teal-500"
          />
          <CartItemButton
            variant="incr"
            productCount={productCount}
            setProductCount={setProductCount}
          />
        </div>
        <button
          className="fill-teal-500 hover:fill-black w-8 h-8 hover:scale-110 ease-in-out duration-300"
          onClick={() => removeProduct(product.id)}
        >
          <RemoveCartSVG />
        </button>
      </div>
    </div>
  );
};
