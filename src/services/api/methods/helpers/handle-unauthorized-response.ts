import { AuthenticatedStatusResponse, ClientApiResponse } from '@backendTypes';
import { redirect } from 'react-router-dom';

import { ROUTES } from '@routes/routes';

export const handleUnauthorizedResponse = (response: ClientApiResponse<AuthenticatedStatusResponse>) => {
  if (response.status === 401) {
    redirect(ROUTES.auth.logout);
    return { ok: true, status: 200, data: { isAuthenticated: false } };
  } else {
    return { ...response };
  }
};
