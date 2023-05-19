import { FC } from 'react';
import Link from 'next/link';

type BtnProps = {
  variant: 'next' | 'prev';
  activePageNumber: number;
  pagesCount: number;
};

export const PaginationButton: FC<BtnProps> = ({
  variant,
  activePageNumber,
  pagesCount,
}) => {
  return (
    <Link
      href={
        variant === 'prev'
          ? `/users/${activePageNumber - 1}`
          : `/users/${activePageNumber + 1}`
      }
      passHref
    >
      <button
        disabled={
          (variant === 'prev' && activePageNumber === 1) ||
          (variant === 'next' && activePageNumber === pagesCount)
        }
        className="w-8 h-8 border-2 border-gray-700 bg-neutral-300 font-black enabled:hover:bg-teal-300 disabled:bg-neutral-50 disabled:border-gray-400 disabled:text-gray-400"
      >
        {variant === 'prev' ? '-' : '+'}
      </button>
    </Link>
  );
};
