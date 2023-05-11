import Image from "next/image";
import { BASE_URL } from "@/constants/constants";
import { UserFullInfo } from "@/types/types";
import { GetServerSidePropsContext } from "next";
import Layout from "@/layout/Layout";

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<{
  props: { user: UserFullInfo };
}> {
  const { query } = context;

  const res = await fetch(`${BASE_URL}/${query.userId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const user = await res.json();

  return {
    props: { user },
  };
}

export default function User({ user }: { user: UserFullInfo }) {
  return (
    <Layout>
      <section className="grid-content py-5 text-stone-800 mx-auto w-4/5 gap-5 flex justify-around items-center text-2xl">
        <Image
          src={user.image}
          alt={user.firstName}
          width={400}
          height={600}
          priority={true}
        />
        <div className="">
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
    </Layout>
  );
}
