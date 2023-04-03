import { useOutletContext } from 'react-router-dom';

type ContextType = {
  isLogged: boolean;
};

export const useLogged = () => {
  const context = useOutletContext<ContextType>();
  if (!context) {
    throw new Error('useLogged must be used within a LoggedProvider');
  }

  const { isLogged } = context;

  return { isLogged };
};
