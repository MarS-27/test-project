import { Pagination } from '@/components/pagination/Pagination';
import { SearchWidget } from '@/components/search/SearchWidget';
import { Users } from '@/types/types';
import { UserCard } from '@/components/cards/UserCard';
import { GetServerSidePropsContext } from 'next';
import { Layout } from '@/layout/Layout';

type UsersListProps = { users: Users };

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { query } = context;
  const pageNum = parseInt(query.pageNum as string);
  const skipedUsers = (pageNum - 1) * 10;

  const res = await fetch(
    `https://dummyjson.com/users?limit=10&skip=${skipedUsers}&select=firstName,lastName,image`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  return {
    props: { users: data.users },
  };
};

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <Layout>
      <section className="grid-content flex flex-col justify-between gap-14 text-stone-800">
        <SearchWidget />
        <div className="grid grid-cols-5 gap-3 max-[880px]:grid-cols-4 max-sm:grid-cols-2">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
        <Pagination />
      </section>
    </Layout>
  );
};

export default UsersList;
