import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Hader/Navbar';
import Footer from '../Hader/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>

  );
};

export default MainLayout;