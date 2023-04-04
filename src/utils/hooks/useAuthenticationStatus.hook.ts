import React from 'react';
import { useOutletContext } from 'react-router-dom';

interface AuthenticationStatusHook {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  loadAuthenticationStatus: () => Promise<void>;
}
export const useAuthenticationStatus = (): AuthenticationStatusHook => {
  const context = useOutletContext<AuthenticationStatusHook>();
  if (!context) {
    throw new Error('useLogged must be used within a LoggedProvider');
  }

  return context;
};
