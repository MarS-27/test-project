import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <Link
        href="/users/1"
        className="text-center w-full block text-8xl hover:text-teal-300 mt-24"
      >
        Go to users
      </Link>
    </MainLayout>
  );
};

export default Home;
