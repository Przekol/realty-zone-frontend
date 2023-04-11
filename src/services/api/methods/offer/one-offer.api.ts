import { OneOfferResponse } from '@backendTypes';

import { ENDPOINTS } from '@services/api/methods/endpoints';
import { ApiServer } from '@services/api/utils/api-server';
import { errorMessages } from '@utils/exceptions';

export const getOneOfferApi = async (offerNumber: string) => {
  return ApiServer.get<OneOfferResponse>({
    endpoint: `${ENDPOINTS.offersList}/${offerNumber}`,
    customErrorMessages: errorMessages,
    isAuthorized: false,
  });
};
