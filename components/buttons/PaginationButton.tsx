import Link from 'next/link';

type BtnProps = {
  btnType: 'next' | 'prev';
  activePage: number;
};

export const PaginationButton = ({ btnType, activePage }: BtnProps) => {
  return (
    <Link
      href={
        btnType === 'prev'
          ? `/users/${activePage - 1}`
          : `/users/${activePage + 1}`
      }
      className={`
        ${btnType === 'next' ? 'rotate-180' : ''}
        ${
          (btnType === 'prev' && activePage === 1) ||
          (btnType === 'next' && activePage === 10)
            ? 'pointer-events-none'
            : ''
        }
        w-10 
        h-7 
        border-2 
        border-gray-700 
        bg-[url('/arrow.svg')]
        bg-center
        bg-cover
        rounded-full 
        hover:bg-teal-300
    `}
    />
  );
};
