import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { AddOffer, MyAccount, MyOffers, Profile, Settings } from '@pages/MyAccount';
import { StatusMessage } from '@pages/StatusMessage';
import { ROUTES } from '@routes/routes';
import { DeleteOfferLoader, DictionariesLoader } from '@services/loaders';
import { offerMessages } from '@utils/data/messages';

export const myAccountRoutes: RouteObject[] = [
  {
    path: ROUTES.myAccount.base,
    element: <MyAccount />,
    children: [
      { index: true, element: <Profile /> },
      { path: ROUTES.myAccount.addOffer, element: <AddOffer />, loader: DictionariesLoader },
      {
        path: ROUTES.myAccount.successful.addOffer,
        element: <StatusMessage message={offerMessages.successfulAddOffer} />,
      },
      {
        path: ROUTES.myAccount.deleteOffer,
        loader: DeleteOfferLoader,
        element: <Navigate to={ROUTES.myAccount.warning.addOffer} />,
      },
      { path: ROUTES.myAccount.warning.addOffer, element: <StatusMessage message={offerMessages.warningAddOffer} /> },
      { path: ROUTES.myAccount.myOffers, element: <MyOffers /> },
      { path: ROUTES.myAccount.settings, element: <Settings /> },
    ],
  },
];
