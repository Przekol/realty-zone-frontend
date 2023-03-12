import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';

export const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
