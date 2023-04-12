import { UserProfileResponse } from '@backendTypes';

import { ApiServer } from '@services/api/utils/api-server';
import { errorMessages } from '@utils/exceptions';

import { ENDPOINTS } from '../endpoints';

export const getUserDetailsApi = () => {
  return ApiServer.get<UserProfileResponse>({
    endpoint: ENDPOINTS.profile,
    customErrorMessages: errorMessages,
  });
};
