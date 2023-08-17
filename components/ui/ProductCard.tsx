import { ProductInfo } from '@/types/types';
import { FC, useState } from 'react';
import Image from 'next/image';
import { CardButtonsGroup } from './ProductCardButtonsGroup';
import { ProductDescription } from './ProductDescription';

type ProductCardProps = {
  product: ProductInfo;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [isShowTitle, setToggleTitle] = useState(false);
  const [isOpenDescription, setToggleDescription] = useState(false);

  const toggleDescription = () => {
    setToggleDescription(!isOpenDescription);
  };

  return (
    <div
      className="p-3 flex flex-col gap-3 border-2 border-slate-700 rounded-xl bg-white shadow-lg hover:shadow-slate-700 ease-in-out duration-300"
      onMouseLeave={() => setToggleDescription(false)}
    >
      {isOpenDescription ? (
        <ProductDescription product={product} />
      ) : (
        <div className="w-full h-56 max-h-56 flex flex-col items-center justify-between gap-3">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="w-full h-36 object-contain"
          />
          <div
            className="relative w-full text-center"
            onMouseEnter={() => setToggleTitle(true)}
            onMouseLeave={() => setToggleTitle(false)}
          >
            <p className="w-full font-bold cursor-help line-clamp-1">
              {product.title}
            </p>
            {isShowTitle ? (
              <p className="absolute bottom-full left-0 w-full z-30 p-1 border-2 border-zinc-200 bg-white text-xs">
                {product.title}
              </p>
            ) : null}
          </div>
          <p className="text-sm text-center">
            <span className="font-semibold">Price:</span> {product.price}$
          </p>
        </div>
      )}
      <CardButtonsGroup
        product={product}
        isOpenDescription={isOpenDescription}
        toggleDescription={toggleDescription}
      />
    </div>
  );
};
