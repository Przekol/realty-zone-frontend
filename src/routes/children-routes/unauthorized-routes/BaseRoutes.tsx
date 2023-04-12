import React from 'react';
import { RouteObject } from 'react-router-dom';

import { AuthLayout, OffersLayout } from '@layouts';
import { About } from '@pages/About';
import { AuthErrorPage } from '@pages/Auth/AuthErrorPage/AuthErrorPage';
import { Blog } from '@pages/Blog';
import { Contact } from '@pages/Contact';
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
  { path: ROUTES.contact, element: <Contact /> },
  { path: ROUTES.about, element: <About /> },
  { path: ROUTES.blog, element: <Blog /> },
];
