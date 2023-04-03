import React, { useEffect } from 'react';
import { useNavigate, useSubmit } from 'react-router-dom';

import { ROUTES } from '@routes/routes';

export const Logout = () => {
  const submit = useSubmit();
  const navigate = useNavigate();

  useEffect(() => {
    submit(null, { method: 'post' });
    navigate(ROUTES.home);
  }, []);

  return null;
};
