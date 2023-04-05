import { AuthenticatedStatusResponse } from '@backendTypes';
import React, { useEffect } from 'react';
import { Navigate, Outlet, useRouteLoaderData } from 'react-router-dom';

import { ROUTES } from '@routes/routes';
import { useAuthenticationStatus } from '@utils/hooks';

export const AuthorizedLayout = () => {
  const { setIsLogged, isLogged, loadAuthenticationStatus } = useAuthenticationStatus();
  const authenticatedStatus = useRouteLoaderData('auth') as AuthenticatedStatusResponse;
  useEffect(() => {
    if (authenticatedStatus) {
      setIsLogged(authenticatedStatus.isAuthenticated);
    }
  }, [authenticatedStatus]);

  return authenticatedStatus.isAuthenticated ? (
    <Outlet context={{ setIsLogged, isLogged, loadAuthenticationStatus }} />
  ) : (
    <Navigate to={ROUTES.auth.signIn} />
  );
};
