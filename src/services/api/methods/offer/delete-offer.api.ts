import { ENDPOINTS } from '@services/api/methods/endpoints';
import { ApiServer } from '@services/api/utils/api-server';
import { errorMessages } from '@utils/exceptions';

type DeleteOfferRequest = {
  offerNumber: string;
};
export const deleteOfferApi = ({ offerNumber }: DeleteOfferRequest) => {
  return ApiServer.delete<null>({
    endpoint: `${ENDPOINTS.offersList}/${offerNumber}`,
    customErrorMessages: errorMessages,
  });
};
