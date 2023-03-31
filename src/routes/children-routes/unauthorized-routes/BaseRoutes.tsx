import React from 'react';
import { RouteObject } from 'react-router-dom';

import { AuthLayout, OffersLayout } from '@layouts';
import { AuthErrorPage } from '@pages/Auth/AuthErrorPage/AuthErrorPage';
import { Home } from '@pages/Home';
import { ROUTES } from '@routes/routes';

import { authRoutes } from './auth';
import { offersRoutes } from './offers';

export const baseRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: ROUTES.auth.base,
    element: <AuthLayout />,
    children: authRoutes,
    errorElement: <AuthErrorPage />,
  },
  {
    path: ROUTES.offers,
    element: <OffersLayout />,
    children: offersRoutes,
  },
];
