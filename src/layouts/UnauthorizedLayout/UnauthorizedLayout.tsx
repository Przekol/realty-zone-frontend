import React from 'react';
import { Outlet } from 'react-router-dom';

import { DefaultLayout } from '../DefaultLayout';

export const UnauthorizedLayout = () => (
  <DefaultLayout>
    <Outlet />
  </DefaultLayout>
);
