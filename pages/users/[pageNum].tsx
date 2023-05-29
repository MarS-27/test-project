import { FC } from 'react';
import { Pagination } from '@/components/ui/Pagination';
import { SearchWidget } from '@/components/ui/SearchWidget';
import { Users } from '@/types/types';
import { UserCard } from '@/components/ui/UserCard';
import { GetServerSideProps } from 'next';
import { MainLayout } from '@/components/layout/MainLayout';

type UsersListProps = {
  users: Users;
  pageNum: number;
};

export const getServerSideProps: GetServerSideProps<UsersListProps> = async (
  ctx,
) => {
  const { query } = ctx;

  const pageNum = parseInt(query.pageNum as string);
  const skipedUsers = (pageNum - 1) * 10;

  const res = await fetch(
    `https://dummyjson.com/users?limit=10&skip=${skipedUsers}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const users = await res.json();

  return {
    props: { ...users, pageNum },
  };
};

const UsersList: FC<UsersListProps> = ({ users, pageNum }) => {
  return (
    <MainLayout>
      <section className="grid-content flex flex-col justify-between gap-14 text-stone-800">
        <SearchWidget />
        <div className="grid grid-cols-5 gap-3 max-[880px]:grid-cols-4 max-sm:grid-cols-2">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
        <Pagination activePageNumber={pageNum} />
      </section>
    </MainLayout>
  );
};

export default UsersList;
