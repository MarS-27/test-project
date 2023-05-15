import { UserFullInfo } from '@/types/types';
import Link from 'next/link';

type SearchedUserProps = {
  user: UserFullInfo;
};

export const SearchedUser: React.FC<SearchedUserProps> = ({ user }) => {
  return (
    <Link
      href={`/user/${user.id}`}
      className="block p-3 border-[1px] border-slate-700 rounded-xl bg-slate-100 hover:bg-teal-300"
    >
      {user.firstName} {user.lastName}
    </Link>
  );
};
