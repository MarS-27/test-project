import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="flex gap-5 text-lg">
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
    </nav>
  );
};
