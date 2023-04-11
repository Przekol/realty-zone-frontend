import React from 'react';
import { RouteObject } from 'react-router-dom';

import { OfferDetails, Offers } from '@pages/Offers';
import { ROUTES } from '@routes/routes';
import { OffersListLoader } from '@services/loaders';

export const offersRoutes: RouteObject[] = [
  { index: true, element: <Offers />, loader: OffersListLoader },
  { path: ROUTES.offerDetails, element: <OfferDetails /> },
];
