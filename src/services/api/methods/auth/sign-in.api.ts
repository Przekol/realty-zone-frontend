import { AuthenticatedStatusResponse, LoginUserRequest } from '@backendTypes';

import { ENDPOINTS } from '@services/api/methods/endpoints';
import { ApiServer } from '@services/api/utils/api-server';
import { signInErrorMessages } from '@utils/exceptions/error-messages/auth';

export const signInApi = async (credentials: LoginUserRequest) => {
  return ApiServer.post<LoginUserRequest, AuthenticatedStatusResponse>({
    endpoint: ENDPOINTS.signIn,
    data: credentials,
    customErrorMessages: signInErrorMessages,
  });
};
