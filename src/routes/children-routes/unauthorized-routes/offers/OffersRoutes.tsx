import React from 'react';
import { RouteObject } from 'react-router-dom';

import { Offers } from '@pages/Offers';

export const offersRoutes: RouteObject[] = [{ index: true, element: <Offers /> }];
