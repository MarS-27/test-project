import clsx from 'clsx';
import Link from 'next/link';

type BtnProps = {
  variant: 'next' | 'prev';
  activePage: number;
};

export const PaginationButton: React.FC<BtnProps> = ({
  variant,
  activePage,
}) => {
  return (
    <Link
      href={
        variant === 'prev'
          ? `/users/${activePage - 1}`
          : `/users/${activePage + 1}`
      }
      className={clsx(
        'w-10 h-7 border-2 border-gray-700 bg-[url("/arrow.svg")] bg-center bg-cover rounded-full hover:bg-teal-300',
        variant === 'next' ? 'rotate-180' : null,
        (variant === 'prev' && activePage === 1) ||
          (variant === 'next' && activePage === 10)
          ? 'pointer-events-none'
          : null,
      )}
    />
  );
};
