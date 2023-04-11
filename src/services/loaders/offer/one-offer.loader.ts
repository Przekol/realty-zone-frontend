import { OneOfferResponse } from '@backendTypes';
import { LoaderFunctionArgs } from 'react-router-dom';

import { getOneOfferApi } from '@services/api/methods/offer';

export const OfferDetailsLoader = async ({ params }: LoaderFunctionArgs): Promise<OneOfferResponse | null> => {
  const offerNumber = params.offerNumber as string;

  const response = await getOneOfferApi(offerNumber);
  if (response.ok) {
    const offer = response.data;

    if (!offer) {
      return null;
    }
    return offer;
  } else {
    return null;
  }
};
