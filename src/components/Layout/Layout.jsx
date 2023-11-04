import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Main} from './Layout.styled';
import Loader from '../Loader';
import NavBar from '../NavBar';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer/>
    </>

  );
};

export default Layout;
