import { OffersListResponse } from '@backendTypes';

import { ENDPOINTS } from '@services/api/methods/endpoints';
import { ApiServer } from '@services/api/utils/api-server';
import { errorMessages } from '@utils/exceptions';

export const getOffersListApi = async () => {
  return ApiServer.get<OffersListResponse>({
    endpoint: ENDPOINTS.offersList,
    customErrorMessages: errorMessages,
    isAuthorized: false,
  });
};
