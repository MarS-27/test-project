import { UserFullInfo } from '@/types/types';
import Link from 'next/link';

export const SearchedUser = ({ user }: { user: UserFullInfo }) => {
  return (
    <li
      className="
        border-[1px]
        border-slate-700 
        rounded-xl 
        bg-slate-100
        hover:bg-teal-300
      "
    >
      <Link
        href={`/user/${user.id}`}
        className="
          block
          p-3 
        "
      >
        {user.firstName} {user.lastName}
      </Link>
    </li>
  );
};
