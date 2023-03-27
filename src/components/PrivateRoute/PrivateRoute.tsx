import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../context/Auth';
import { ROUTES } from '../../routes';

export const PrivateRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={ROUTES.signIn} />;
  }
  return <Outlet />;
};
