import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './Layout.styled';
import Loader from '../Loader';
import NavBar from '../NavBar';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer/>
    </>

  );
};

export default Layout;
