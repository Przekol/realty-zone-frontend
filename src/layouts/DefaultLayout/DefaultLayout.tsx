import { AuthenticatedStatusResponse } from '@backendTypes';
import { Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Outlet, useRouteLoaderData } from 'react-router-dom';

import { useAuth } from '@context/auth';
import { MainFooter } from '@templates/footers';
import { MainNavigation } from '@templates/navigations';

interface Props {
  children?: React.ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  const { dispatch } = useAuth();
  const authenticatedStatus = useRouteLoaderData('auth') as AuthenticatedStatusResponse;

  useEffect(() => {
    updateAuthState(authenticatedStatus);
  }, [dispatch]);

  const updateAuthState = async (authenticatedStatus: AuthenticatedStatusResponse) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      if (authenticatedStatus) {
        dispatch({ type: 'SET_AUTHENTICATED', payload: authenticatedStatus.isAuthenticated });
      }
    } finally {
      dispatch({ type: 'CLEAR_LOADING' });
    }
  };

  return (
    <Flex direction='column' minHeight='100vh'>
      <MainNavigation />
      {children}
      <Outlet />
      <MainFooter />
    </Flex>
  );
};
