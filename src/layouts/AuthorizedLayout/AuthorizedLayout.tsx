import { AuthenticatedStatusResponse } from '@backendTypes';
import React, { useEffect } from 'react';
import { Navigate, Outlet, useRouteLoaderData } from 'react-router-dom';

import { ROUTES } from '@routes/routes';

export const AuthorizedLayout = () => {
  const authenticatedStatus = useRouteLoaderData('auth') as AuthenticatedStatusResponse;
  useEffect(() => {
    if (authenticatedStatus) {
      localStorage.setItem('isLogged', JSON.stringify(authenticatedStatus.isAuthenticated));
    }
  }, [authenticatedStatus]);

  return authenticatedStatus.isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.auth.signIn} />;
};
