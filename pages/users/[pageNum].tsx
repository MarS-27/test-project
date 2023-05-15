import { Pagination } from '@/components/pagination/Pagination';
import { SearchWidget } from '@/components/search/SearchWidget';
import { Users } from '@/types/types';
import { UserCard } from '@/components/cards/UserCard';
import { GetServerSidePropsContext } from 'next';
import { Layout } from '@/layout/Layout';
import { useMemo } from 'react';

type UsersListProps = { usersOnPage: Users; usersAll: Users };

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { query } = context;
  const pageNum = parseInt(query.pageNum as string);
  const skipedUsers = (pageNum - 1) * 10;

  const resUsersOnPage = await fetch(
    `https://dummyjson.com/users?limit=10&skip=${skipedUsers}&select=firstName,lastName,image`,
  );
  const resAllUsers = await fetch(
    'https://dummyjson.com/users?limit=500&select=firstName,lastName,image',
  );

  if (!resUsersOnPage.ok || !resAllUsers.ok) {
    throw new Error('Failed to fetch data');
  }

  const usersOnPage = await resUsersOnPage.json().then((data) => data.users);
  const usersAll = await resAllUsers.json().then((data) => data.users);

  return {
    props: { usersOnPage, usersAll },
  };
};

const UsersList: React.FC<UsersListProps> = ({ usersOnPage, usersAll }) => {
  const pagesCount = useMemo(() => {
    return Math.ceil(usersAll.length / 10);
  }, [usersAll.length]);

  return (
    <Layout>
      <section className="grid-content flex flex-col justify-between gap-16 text-stone-800">
        <SearchWidget />
        <div className="grid grid-cols-5 gap-3 max-[880px]:grid-cols-4 max-sm:grid-cols-2">
          {usersOnPage.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
        <Pagination pagesCount={pagesCount} />
      </section>
    </Layout>
  );
};

export default UsersList;
