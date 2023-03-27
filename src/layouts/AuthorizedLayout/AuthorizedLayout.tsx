import React from 'react';

import { PrivateRoute } from '../../components/PrivateRoute';
import { DefaultLayout } from '../DefaultLayout';

export const AuthorizedLayout = () => {
  return (
    <DefaultLayout>
      <PrivateRoute />
    </DefaultLayout>
  );
};
