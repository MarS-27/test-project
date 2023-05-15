import { Layout } from '@/layout/Layout';

const Page404 = () => {
  return (
    <Layout>
      <section className="grid-content py-20 text-stone-800 mx-auto w-4/5 gap-5 flex flex-col items-center">
        <p className="font-bold text-8xl">404</p>
        <p className="text-5xl">Page Not Found!</p>
      </section>
    </Layout>
  );
};
export default Page404;
