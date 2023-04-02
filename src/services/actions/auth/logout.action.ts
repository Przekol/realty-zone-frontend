import { AuthenticatedStatusResponse, ClientApiResponse } from '@backendTypes';

import { logoutApi } from '@services/api/methods/auth';

export const LogoutAction = async () => {
  const onErrorCallback = async (
    response: ClientApiResponse<AuthenticatedStatusResponse>,
  ): Promise<ClientApiResponse<AuthenticatedStatusResponse>> => {
    if (response.status === 401) {
      return { ok: true, status: 200, data: { isAuthenticated: false } };
    } else {
      return { ...response };
    }
  };
  await logoutApi(onErrorCallback);
  return null;
};
