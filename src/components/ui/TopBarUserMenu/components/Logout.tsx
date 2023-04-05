import { MenuItem } from '@chakra-ui/react';
import React from 'react';
import { useSubmit } from 'react-router-dom';

import { ROUTES } from '@routes/routes';
import { useAuthenticationStatus } from '@utils/hooks';

export const Logout = () => {
  const { setIsLogged } = useAuthenticationStatus();
  const submit = useSubmit();

  const handleLogout = () => {
    submit(null, { method: 'post', action: ROUTES.auth.logout });
    if (setIsLogged) {
      setIsLogged(false);
    }
  };

  return <MenuItem onClick={handleLogout}>Wyloguj</MenuItem>;
};
