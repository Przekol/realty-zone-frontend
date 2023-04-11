import React from 'react';
import { RouteObject } from 'react-router-dom';

import { AddOffer, MyAccount, Profile } from '@pages/MyAccount';
import { ROUTES } from '@routes/routes';
import { AddOfferAction } from '@services/actions';
import { DictionariesLoader } from '@services/loaders';

export const myAccountRoutes: RouteObject[] = [
  {
    path: ROUTES.myAccount.base,
    element: <MyAccount />,
    children: [
      { index: true, element: <Profile /> },
      { path: ROUTES.myAccount.addOffer, element: <AddOffer />, loader: DictionariesLoader, action: AddOfferAction },
    ],
  },
];
