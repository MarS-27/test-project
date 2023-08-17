import { FC, Dispatch, SetStateAction } from 'react';

type CartItemButtonProps = {
  productCount: number;
  setProductCount: Dispatch<SetStateAction<number>>;
  variant: 'incr' | 'decr';
};

export const CartItemButton: FC<CartItemButtonProps> = ({
  variant,
  productCount,
  setProductCount,
}) => {
  return (
    <button
      disabled={variant === 'decr' && (productCount === 1 || !productCount)}
      onClick={() =>
        variant === 'incr'
          ? setProductCount(productCount + 1)
          : setProductCount(productCount - 1)
      }
      className="font-black enabled:hover:text-teal-300 disabled:text-gray-400 enabled:hover:scale-125 ease-out duration-200"
    >
      {variant === 'incr' ? '+' : '-'}
    </button>
  );
};
