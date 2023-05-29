import { MainLayout } from '@/components/layout/MainLayout';
import { GetServerSideProps } from 'next';
import { Users, SortBy, SortOrder } from '@/types/types';
import { useState, useEffect, FC } from 'react';
import { sortUsers } from '@/utils/sortUsers';
import Link from 'next/link';
import { SortSVG } from '@/components/ui/SortSVG';

type UsersTableProps = {
  users: Users;
  sortOrder: SortOrder;
  sortBy: SortBy;
};

const tableHeadParams = ['id', 'name', 'age', 'weight', 'height'];

export const getServerSideProps: GetServerSideProps<UsersTableProps> = async (
  ctx,
) => {
  const { query } = ctx;

  const res = await fetch('https://dummyjson.com/users?limit=100');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const users = await res.json();

  return {
    props: {
      ...users,
      sortOrder: query.sortOrder,
      sortBy: query.sortBy,
    },
  };
};

const Table: FC<UsersTableProps> = ({ users, sortOrder, sortBy }) => {
  const [sortedUsers, setSortedUsers] = useState<Users>([]);

  useEffect(() => {
    if (sortOrder === 'asc' && sortBy === 'id') {
      setSortedUsers(users);
    } else if (sortOrder === 'desc') {
      setSortedUsers(sortUsers(users, sortBy));
    } else if (sortOrder === 'asc') {
      setSortedUsers([...sortedUsers].reverse());
    }
  }, [sortOrder, sortBy]);

  return (
    <MainLayout>
      <section className="text-stone-800">
        <h3 className="text-center text-4xl font-bold mb-5">Users table</h3>
        <table className="w-3/5 p-4 mx-auto border-separate border-spacing-0 border-2 border-slate-700 rounded-xl bg-slate-100 max-md:w-full max-md:text-xs max-md:p-2">
          <thead>
            <tr>
              {tableHeadParams.map((param) => (
                <th
                  key={param}
                  className="pb-2 px-1 text-left border-b-2 border-slate-700"
                >
                  <Link
                    href={`/table?sortBy=${param}&sortOrder=${
                      sortOrder === 'asc' || sortBy !== param ? 'desc' : 'asc'
                    }`}
                    className="flex gap-1 items-center hover:text-teal-300 cursor-pointer fill-current"
                  >
                    <span className="uppercase">{param}</span>
                    <SortSVG />
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr key={user.id}>
                <td className="border-b px-1 border-slate-700">{user.id}</td>
                <td className="border-b px-1 border-slate-700">
                  {user.firstName} {user.lastName}
                </td>
                <td className="border-b px-1 border-slate-700">{user.age}</td>
                <td className="border-b px-1 border-slate-700">
                  {user.weight}
                </td>
                <td className="border-b px-1 border-slate-700">
                  {user.height}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </MainLayout>
  );
};

export default Table;
