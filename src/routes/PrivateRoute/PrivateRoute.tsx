import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@routes/routes';

import { useAuth } from '../../context/Auth';

export const PrivateRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={ROUTES.signIn} />;
  }
  return <Outlet />;
};
