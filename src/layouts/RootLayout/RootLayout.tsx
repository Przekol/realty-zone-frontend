import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../../components/Footer';
import { Navigation } from '../../components/Navigation';

export const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};
