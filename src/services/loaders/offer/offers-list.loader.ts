import { OffersListResponse } from '@backendTypes';

import { getOffersListApi } from '@services/api/methods/offer';

export const OffersListLoader = async (): Promise<OffersListResponse | null> => {
  const response = await getOffersListApi();
  if (response.ok) {
    const offersList = response.data;

    if (!offersList) {
      return null;
    }
    return offersList;
  } else {
    return null;
  }
};
