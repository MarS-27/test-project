import { ProductInfo } from '@/types/types';
import { FC } from 'react';

type ProductDescriptionProps = {
  product: ProductInfo;
};

export const ProductDescription: FC<ProductDescriptionProps> = ({
  product,
}) => {
  return (
    <div className="h-56 max-h-56 w-full overflow-y-auto max-md:text-sm p-3 border-2 border-zinc-200 bg-white">
      <p className="mb-2">{product.description}</p>
      <p>
        <span className="font-bold">Rate: </span>
        {product.rating.rate} ({product.rating.count})
      </p>
    </div>
  );
};
