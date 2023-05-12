import Link from 'next/link';
import { STATIC_ROUTES } from '@/constants/constants';
import { Layout } from '@/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Link
        href={STATIC_ROUTES.users.path}
        className="grid-content text-center text-8xl hover:text-teal-300 mt-24"
      >
        Go to users
      </Link>
    </Layout>
  );
};

export default Home;
