import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthenticationStatusLoader } from '@services/loaders';

interface Props {
  children?: React.ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    loadAuthenticationStatus();
  }, []);

  const loadAuthenticationStatus = async () => {
    const authStatus = await AuthenticationStatusLoader();
    if (!authStatus) return;
    setIsLogged(authStatus.isAuthenticated);
  };
  return (
    <Flex direction='column' minHeight='100vh'>
      {children}
      <Outlet context={{ isLogged, setIsLogged, loadAuthenticationStatus }} />
    </Flex>
  );
};
