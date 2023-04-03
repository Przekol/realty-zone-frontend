import { AuthenticatedStatusResponse } from '@backendTypes';
import React, { useEffect } from 'react';
import { useRouteLoaderData } from 'react-router-dom';

import { ContentWrapper } from '@base/ContentWrapper';
import { PrivateRoute } from '@routes/PrivateRoute';

export const AuthorizedLayout = () => {
  const authenticatedStatus = useRouteLoaderData('auth') as AuthenticatedStatusResponse;
  useEffect(() => {
    if (authenticatedStatus) {
      localStorage.setItem('isLogged', JSON.stringify(authenticatedStatus.isAuthenticated));
    }
  }, [authenticatedStatus]);
  return (
    <ContentWrapper>
      <PrivateRoute />
    </ContentWrapper>
  );
};
