import { AuthenticatedStatusResponse, ClientApiResponse } from '@backendTypes';

import { ENDPOINTS } from '@services/api/methods/endpoints';
import { ApiServer } from '@services/api/utils/api-server';
import { errorMessages } from '@utils/exceptions';

export const getAuthenticationStatusApi = (
  onErrorCallback: (
    response: ClientApiResponse<AuthenticatedStatusResponse>,
  ) => Promise<ClientApiResponse<AuthenticatedStatusResponse>>,
) => {
  return ApiServer.get<AuthenticatedStatusResponse>(ENDPOINTS.authenticationStatus, errorMessages, onErrorCallback);
};
