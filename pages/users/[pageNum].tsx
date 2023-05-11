import Pagination from "@/components/pagination/Pagination";
import SearchForm from "@/components/forms/SearchForm";
import {
  BASE_URL,
  USERS_LIMIT,
  USERS_SELECT_PARAMS,
} from "@/constants/constants";
import { Users } from "@/models/models";
import UserCard from "@/components/cards/UserCard";
import { GetServerSidePropsContext } from "next";
import Layout from "@/layout/Layout";

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<{
  props: { users: Users };
}> {
  const { query } = context;
  const pageNum = parseInt(query.pageNum as string);
  const skipedUsers = (pageNum - 1) * 10;

  const res = await fetch(
    `${BASE_URL}?limit=${USERS_LIMIT}&skip=${skipedUsers}&select=${USERS_SELECT_PARAMS}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const users = await res.json().then((data) => data.users);

  return {
    props: { users },
  };
}

export default function UsersList({ users }: { users: Users }) {
  return (
    <Layout>
      <section className="grid-content py-5 flex flex-col justify-between gap-16 text-stone-800">
        <SearchForm />
        <ul className="grid grid-cols-5 gap-3">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
        <Pagination />
      </section>
    </Layout>
  );
}
