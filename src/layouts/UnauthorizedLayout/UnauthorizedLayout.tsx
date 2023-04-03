import React from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayout } from '@layouts';

export const UnauthorizedLayout = () => {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};
