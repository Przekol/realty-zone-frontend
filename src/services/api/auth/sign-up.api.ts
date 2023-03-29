import { GetOneUserResponse, RegisterUserRequest } from '@backendTypes';

import { signUpErrorMessages } from '@utils/exceptions/error-messages/auth/sing-up-error-messages';

import { ApiServer } from '../api-server';
import { ENDPOINTS } from '../endpoints';

export const signUpApi = (credentials: RegisterUserRequest) => {
  return ApiServer.post<RegisterUserRequest, GetOneUserResponse>(ENDPOINTS.SIGN_UP, credentials, signUpErrorMessages);
};
