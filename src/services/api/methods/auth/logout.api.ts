import { AuthenticatedStatusResponse, ClientApiResponse } from '@backendTypes';

import { ENDPOINTS } from '@services/api/methods/endpoints';
import { ApiServer } from '@services/api/utils/api-server';
import { errorMessages } from '@utils/exceptions';

export const logoutApi = async (
  onErrorCallback: (
    response: ClientApiResponse<AuthenticatedStatusResponse>,
  ) => Promise<ClientApiResponse<AuthenticatedStatusResponse>>,
): Promise<ClientApiResponse<AuthenticatedStatusResponse>> => {
  return ApiServer.post<null, AuthenticatedStatusResponse>(ENDPOINTS.logout, null, errorMessages, onErrorCallback);
};
