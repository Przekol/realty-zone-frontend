import { GetOneUserResponse, RegisterUserRequest } from '@backendTypes';

import { ApiServer } from '@services/api/utils/api-server';
import { signUpErrorMessages } from '@utils/exceptions/error-messages/auth';

import { ENDPOINTS } from '../endpoints';

export const signUpApi = (credentials: RegisterUserRequest) => {
  return ApiServer.post<RegisterUserRequest, GetOneUserResponse>({
    endpoint: ENDPOINTS.signUp,
    data: credentials,
    customErrorMessages: signUpErrorMessages,
  });
};
