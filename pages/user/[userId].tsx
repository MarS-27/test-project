import Image from 'next/image';
import { BASE_URL } from '@/constants/constants';
import { UserFullInfo } from '@/types/types';
import { GetServerSidePropsContext } from 'next';
import { Layout } from '@/layout/Layout';

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<{
  props: { user: UserFullInfo };
}> {
  const { query } = context;

  const res = await fetch(`${BASE_URL}/${query.userId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const user = await res.json();

  return {
    props: { user },
  };
}

const UserPage = ({ user }: { user: UserFullInfo }) => {
  return (
    <Layout>
      <section
        className="
          grid-content 
          py-12 
          text-stone-800 
          mx-auto 
          gap-5 
          flex 
          justify-around 
          items-center 
          text-2xl
          max-[980px]:flex-col
          max-sm:text-lg
        "
      >
        <Image
          src={user.image}
          alt={user.firstName}
          width={300}
          height={500}
          priority={true}
          className="
            border-4
            border-slate-700 
            rounded-xl 
            bg-slate-300
          "
        />
        <div className="user-info">
          <p>
            <span>First name:</span> {user.firstName}
          </p>
          <p>
            <span>Last name:</span> {user.lastName}
          </p>
          <p>
            <span>Age:</span> {user.age}
          </p>
          <p>
            <span>Email:</span> {user.email}
          </p>
          <p>
            <span>Address: </span>
            {user.address.address}, {user.address.city}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default UserPage;
