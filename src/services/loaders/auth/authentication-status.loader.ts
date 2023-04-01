import { AuthenticatedStatusResponse, ClientApiResponse } from '@backendTypes';

import { getAuthenticationStatusApi } from '@services/api/methods/auth';

export const AuthenticationStatusLoader = async () => {
  const onErrorCallback = (response: ClientApiResponse<AuthenticatedStatusResponse>) => {
    if (response.status === 401) {
      return { isAuthenticated: false };
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
