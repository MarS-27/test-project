import { Pagination } from '@/components/pagination/Pagination';
import { SearchWidget } from '@/components/search/SearchWidget';
import {
  BASE_URL,
  USERS_LIMIT,
  USERS_SELECT_PARAMS,
  MAX_USERS,
} from '@/constants/constants';
import { Users } from '@/types/types';
import { UserCard } from '@/components/cards/UserCard';
import { GetServerSidePropsContext } from 'next';
import { Layout } from '@/layout/Layout';
import { useMemo } from 'react';

type UsersListProps = { usersOnPage: Users; usersAll: Users };

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<{
  props: UsersListProps;
}> {
  const { query } = context;
  const pageNum = parseInt(query.pageNum as string);
  const skipedUsers = (pageNum - 1) * 10;

  const resUsersOnPage = await fetch(
    `${BASE_URL}?limit=${USERS_LIMIT}&skip=${skipedUsers}&select=${USERS_SELECT_PARAMS}`,
  );
  const resAllUsers = await fetch(
    `${BASE_URL}?limit=${MAX_USERS}&select=${USERS_SELECT_PARAMS}`,
  );

  if (!resUsersOnPage.ok || !resAllUsers.ok) {
    throw new Error('Failed to fetch data');
  }

  const usersOnPage = await resUsersOnPage.json().then((data) => data.users);
  const usersAll = await resAllUsers.json().then((data) => data.users);

  return {
    props: { usersOnPage, usersAll },
  };
}

const UsersList = ({ usersOnPage, usersAll }: UsersListProps) => {
  const pagesCount = useMemo(() => {
    return Math.ceil(usersAll.length / parseInt(USERS_LIMIT));
  }, [usersAll.length]);

  return (
    <Layout>
      <section className="grid-content py-5 flex flex-col justify-between gap-16 text-stone-800">
        <SearchWidget />
        <ul className="grid grid-cols-5 gap-3 max-[880px]:grid-cols-4 max-sm:grid-cols-2">
          {usersOnPage.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
        <Pagination pagesCount={pagesCount} />
      </section>
    </Layout>
  );
};

export default UsersList;
