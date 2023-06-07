import { GetStaticProps } from 'next';
import { Products } from '@/types/types';
import { FC } from 'react';
import { ProductCard } from '@/components/ui/ProductCard';
import { MainLayout } from '@/components/layout/MainLayout';
import { ShopCartContextProvider } from '@/context/ShopCartCotextProvider';

type ProductsPageProps = {
  products: Products;
};

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const products = await res.json();

  return {
    props: { products },
  };
};

const Shop: FC<ProductsPageProps> = ({ products }) => {
  return (
    <ShopCartContextProvider>
      <MainLayout>
        <section className="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-sm:grid-cols-2 max-[420px]:grid-cols-1 text-stone-800">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </MainLayout>
    </ShopCartContextProvider>
  );
};

export default Shop;
