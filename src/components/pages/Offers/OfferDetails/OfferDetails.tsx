import { OneOfferResponse } from '@backendTypes';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { OfferCardDetails } from '@ui/OfferCard';

export const OfferDetails = () => {
  const offer = useLoaderData() as OneOfferResponse;

  return <OfferCardDetails offer={offer} />;
};
