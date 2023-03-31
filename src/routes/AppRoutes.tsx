import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthorizedLayout, UnauthorizedLayout } from '@layouts';
import { ErrorPage } from '@pages/Error';
import { baseRoutes, myAccountRoutes } from '@routes/children-routes';
import { ROUTES } from '@routes/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UnauthorizedLayout />,
    errorElement: <ErrorPage />,
    children: baseRoutes,
  },
  {
    path: ROUTES.myAccount.base,
    element: <AuthorizedLayout />,
    children: myAccountRoutes,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
