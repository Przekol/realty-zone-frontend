import React from 'react';
import { Outlet } from 'react-router-dom';

import { MainNavigation } from '../components/MainNavigation';

export const AppLayout = () => {
  return (
    <>
      <header>
        <MainNavigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
