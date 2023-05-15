import Link from 'next/link';
import { Layout } from '@/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Link
        href="/users/1"
        className="text-center w-full block text-8xl hover:text-teal-300 mt-24"
      >
        Go to users
      </Link>
    </Layout>
  );
};

export default Home;
