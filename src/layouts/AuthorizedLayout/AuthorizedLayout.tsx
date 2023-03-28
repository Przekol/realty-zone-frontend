import React from 'react';

import { PrivateRoute } from '@routes/PrivateRoute';

import { DefaultLayout } from '../DefaultLayout';

export const AuthorizedLayout = () => {
  return (
    <DefaultLayout>
      <PrivateRoute />
    </DefaultLayout>
  );
};
