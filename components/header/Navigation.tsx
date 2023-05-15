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
    </nav>
  );
};
