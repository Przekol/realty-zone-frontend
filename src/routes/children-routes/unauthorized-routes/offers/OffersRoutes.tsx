import React from 'react';
import { RouteObject } from 'react-router-dom';

import { Offers } from '@pages/Offers';
import { OffersListLoader } from '@services/loaders';

export const offersRoutes: RouteObject[] = [{ index: true, element: <Offers />, loader: OffersListLoader }];
