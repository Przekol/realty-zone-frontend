import { OneOfferResponse } from '@backendTypes';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

export const OfferDetails = () => {
  const offer = useLoaderData() as OneOfferResponse;
  console.log(offer);
  return <div>szczegóły oferty</div>;
};
