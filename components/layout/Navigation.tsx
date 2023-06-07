import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

type NavProps = {
  isBurgerToggled: boolean;
};

export const Navigation: FC<NavProps> = ({ isBurgerToggled }) => {
  return (
    <nav
      className={clsx(
        'flex gap-5 text-lg text-center',
        isBurgerToggled
          ? 'max-md:flex max-md:flex-col max-md:absolute max-md:min-w-[200px] max-md:top-[110%] max-md:right-0 max-md:p-3 max-md:border-2 max-md:border-zinc-200 max-md:bg-white max-md:z-50'
          : 'max-md:hidden',
      )}
    >
      <Link href="/" className="hover:text-teal-300">
        HOME
      </Link>
      <Link href="/users/1" className="hover:text-teal-300">
        USERS
      </Link>
      <Link
        href="/table?sortBy=id&sortOrder=asc"
        className="hover:text-teal-300"
      >
        TABLE
      </Link>
      <Link href="/shop" className="hover:text-teal-300">
        SHOP
      </Link>
    </nav>
  );
};
