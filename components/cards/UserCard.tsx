import { UserShortInfo } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

type UserCardProps = {
  user: UserShortInfo;
};

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Link
      href={`/user/${user.id}`}
      className="p-3 flex flex-col items-center gap-3 border-2 border-slate-700 rounded-xl bg-slate-100 hover:bg-teal-300"
    >
      <Image src={user.image} alt={user.firstName} width={100} height={100} />
      <p className="text-center">
        {user.firstName} {user.lastName}
      </p>
    </Link>
  );
};
