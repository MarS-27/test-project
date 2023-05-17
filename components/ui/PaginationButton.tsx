import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

type BtnProps = {
  variant: 'next' | 'prev';
  activePageNumber: number;
};

export const PaginationButton: FC<BtnProps> = ({
  variant,
  activePageNumber,
}) => {
  return (
    <Link
      href={
        variant === 'prev'
          ? `/users/${activePageNumber - 1}`
          : `/users/${activePageNumber + 1}`
      }
      className={clsx(
        'w-10 h-7 border-2 border-gray-700 bg-[url("/arrow.svg")] bg-center bg-cover rounded-full hover:bg-teal-300',
        variant === 'next' ? 'rotate-180' : null,
        variant === 'prev' && activePageNumber === 1
          ? 'pointer-events-none'
          : null,
        variant === 'next' && activePageNumber === 10
          ? 'pointer-events-none'
          : null,
      )}
    />
  );
};
