import { AuthenticatedStatusResponse } from '@backendTypes';
import React from 'react';
import { Navigate, Outlet, useRouteLoaderData } from 'react-router-dom';

import { ROUTES } from '@routes/routes';

export const PrivateRoute = () => {
  const authenticatedStatus = useRouteLoaderData('auth') as AuthenticatedStatusResponse;

  return authenticatedStatus.isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.auth.signIn} />;
};
