import { ReactNode } from 'react';
import { Header } from '../components/header/Header';

type Props = {
  children?: ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-7xl min-w-[320px] p-4 mx-auto">{children}</main>
    </>
  );
};
