import { FC } from 'react';
import Image from 'next/image';
import { UserInfo } from '@/types/types';
import { GetServerSideProps } from 'next';
import { MainLayout } from '@/components/layout/MainLayout';

type UserPageProps = {
  user: UserInfo;
};

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (
  ctx,
) => {
  const { query } = ctx;

  const res = await fetch(`https://dummyjson.com/users/${query.userId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const user = await res.json();

  return {
    props: { user },
  };
};

const UserPage: FC<UserPageProps> = ({ user }) => {
  return (
    <MainLayout>
      <section className="grid-content py-5 text-stone-800 mx-auto gap-10 flex justify-center items-center text-2xl max-[980px]:flex-col max-sm:text-lg">
        <Image
          src={user.image}
          alt={user.firstName}
          width={300}
          height={500}
          className="border-4 border-slate-700 rounded-xl bg-slate-300"
        />
        <div>
          <p>
            <span className="font-bold">First name:</span> {user.firstName}
          </p>
          <p>
            <span className="font-bold">Last name:</span> {user.lastName}
          </p>
          <p>
            <span className="font-bold">Age:</span> {user.age}
          </p>
          <p>
            <span className="font-bold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-bold">Address: </span>
            {user.address.address}, {user.address.city}
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default UserPage;
