import { FC, PropsWithChildren } from 'react';
import MainHeader from '@/components/layout/MainHeader';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
