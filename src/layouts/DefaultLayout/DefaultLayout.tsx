import { AuthenticatedStatusResponse } from '@backendTypes';
import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Outlet, useRouteLoaderData } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const authenticatedStatus = useRouteLoaderData('auth') as AuthenticatedStatusResponse;
  const local = useRouteLoaderData('default') as { isLogged: boolean };
  const storedIsLogged = localStorage.getItem('isLogged');
  useEffect(() => {
    if (!!authenticatedStatus && !!local) {
      setIsLogged(authenticatedStatus.isAuthenticated);
      localStorage.setItem('isLogged', JSON.stringify(authenticatedStatus.isAuthenticated));
    }
    if (!authenticatedStatus && !!local) {
      setIsLogged(JSON.parse(storedIsLogged || 'false'));
    }
  }, [storedIsLogged, authenticatedStatus]);

  return (
    <Flex direction='column' minHeight='100vh'>
      {children}
      <Outlet context={{ isLogged }} />
    </Flex>
  );
};
