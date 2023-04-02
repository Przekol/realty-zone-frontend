import React, { useEffect } from 'react';
import { useNavigate, useSubmit } from 'react-router-dom';

import { useAuth } from '@context/auth';
import { ROUTES } from '@routes/routes';

export const Logout = () => {
  const { state, dispatch } = useAuth();
  const submit = useSubmit();
  const navigate = useNavigate();

  useEffect(() => {
    handleLogout();
  }, []);

  const handleLogout = async () => {
    try {
      dispatch({ type: 'SET_LOADING' });
      await submit(null, { method: 'post' });
      dispatch({ type: 'LOGOUT' });
    } finally {
      dispatch({ type: 'CLEAR_LOADING' });
      navigate(ROUTES.home);
    }
  };

  if (state.isLoading) {
    return <div>Loading....</div>;
  }
  return null;
};
