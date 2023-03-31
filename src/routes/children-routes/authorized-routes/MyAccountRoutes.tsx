import React from 'react';
import { RouteObject } from 'react-router-dom';

import { AddOffer, MyAccount, Profile } from '@pages/MyAccount';
import { ROUTES } from '@routes/routes';

export const myAccountRoutes: RouteObject[] = [
  {
    path: ROUTES.myAccount.base,
    element: <MyAccount />,
    children: [
      { index: true, element: <Profile /> },
      { path: ROUTES.myAccount.addOffer, element: <AddOffer /> },
    ],
  },
];
