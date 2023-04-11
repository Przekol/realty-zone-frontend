import { CreateOfferResponse, OfferRequest } from '@backendTypes';

import { ENDPOINTS } from '@services/api/methods/endpoints';
import { ApiServer } from '@services/api/utils/api-server';
import { errorMessages } from '@utils/exceptions';

export const addOfferApi = (offer: OfferRequest) => {
  return ApiServer.post<OfferRequest, CreateOfferResponse>({
    endpoint: ENDPOINTS.addOffer,
    data: offer,
    customErrorMessages: errorMessages,
  });
};
