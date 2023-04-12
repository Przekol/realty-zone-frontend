import { LoaderFunctionArgs } from 'react-router-dom';

import { deleteOfferApi } from '@services/api/methods/offer';

export const DeleteOfferLoader = async ({ params }: LoaderFunctionArgs) => {
  const offerNumber = params.offerNumber as string;

  await deleteOfferApi({ offerNumber });
  return null;
};
