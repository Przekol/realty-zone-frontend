import { UpdateUserRequest, UserProfileResponse } from '@backendTypes';

import { ENDPOINTS } from '@services/api/methods/endpoints';
import { ApiServer } from '@services/api/utils/api-server';
import { errorMessages } from '@utils/exceptions';

export const updateProfileApi = (data: UpdateUserRequest) => {
  return ApiServer.patch<UpdateUserRequest, UserProfileResponse>({
    endpoint: ENDPOINTS.profile,
    data,
    customErrorMessages: errorMessages,
  });
};
