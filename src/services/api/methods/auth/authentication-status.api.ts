import { AuthenticatedStatusResponse } from '@backendTypes';

import { ENDPOINTS } from '@services/api/methods/endpoints';
import { handleUnauthorizedResponse } from '@services/api/methods/helpers';
import { ApiServer } from '@services/api/utils/api-server';
import { errorMessages } from '@utils/exceptions';

export const getAuthenticationStatusApi = () => {
  return ApiServer.get<AuthenticatedStatusResponse>({
    endpoint: ENDPOINTS.authenticationStatus,
    customErrorMessages: errorMessages,
    onErrorCallback: async (response) => handleUnauthorizedResponse(response),
  });
};
