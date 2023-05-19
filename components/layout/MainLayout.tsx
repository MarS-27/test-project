import { FC } from 'react';
import { ReactNode } from 'react';
import { Header } from './Header';

type Props = {
  children?: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-7xl min-w-[320px] p-4 mx-auto">{children}</main>
    </>
  );
};
