import { AuthenticatedStatusResponse, ClientApiResponse } from '@backendTypes';

export const handleUnauthorizedResponse = (response: ClientApiResponse<AuthenticatedStatusResponse>) => {
  if (response.status === 401) {
    return { ok: true, status: 200, data: { isAuthenticated: false } };
  } else {
    return { ...response };
  }
};
