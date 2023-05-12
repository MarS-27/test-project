import { UserShortInfo } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

export const UserCard = ({ user }: { user: UserShortInfo }) => {
  return (
    <li
      className="
        border-2
        border-slate-700 
        rounded-xl 
        bg-slate-100
        hover:bg-teal-300
      "
    >
      <Link
        href={`/user/${user.id}`}
        className="
          p-3 
          flex 
          flex-col 
          items-center 
          gap-3 
        "
      >
        <Image
          src={user.image}
          alt={user.firstName}
          width={100}
          height={100}
          priority={true}
        />
        <p className="text-center">
          {user.firstName} {user.lastName}
        </p>
      </Link>
    </li>
  );
};
