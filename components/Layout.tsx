import { ReactNode } from 'react';
import Navbar from './Navbar';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;