import { AuthenticatedStatusResponse, ClientApiResponse } from '@backendTypes';

import { getAuthenticationStatusApi } from '@services/api/methods/auth';

export const AuthenticationStatusLoader = async () => {
  const onErrorCallback = async (
    response: ClientApiResponse<AuthenticatedStatusResponse>,
  ): Promise<ClientApiResponse<AuthenticatedStatusResponse>> => {
    if (response.status === 401) {
      return { ok: true, status: 200, data: { isAuthenticated: false } };
    } else {
      return { ...response };
    }
  };
  const response = await getAuthenticationStatusApi(onErrorCallback);
  if (response.ok) {
    const authenticatedStatus = response.data;

    if (!authenticatedStatus) {
      return { isAuthenticated: false };
    }
    return authenticatedStatus;
  } else {
    return { isAuthenticated: false };
  }
};
