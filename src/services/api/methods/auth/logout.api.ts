import { AuthenticatedStatusResponse, ClientApiResponse } from '@backendTypes';

import { ENDPOINTS } from '@services/api/methods/endpoints';
import { handleUnauthorizedResponse } from '@services/api/methods/helpers';
import { ApiServer } from '@services/api/utils/api-server';
import { errorMessages } from '@utils/exceptions';

export const logoutApi = (): Promise<ClientApiResponse<AuthenticatedStatusResponse>> => {
  return ApiServer.post<null, AuthenticatedStatusResponse>({
    endpoint: ENDPOINTS.logout,
    data: null,
    customErrorMessages: errorMessages,
    onErrorCallback: async (response) => handleUnauthorizedResponse(response),
  });
};
