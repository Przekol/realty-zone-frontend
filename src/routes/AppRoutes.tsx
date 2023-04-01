import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthorizedLayout, DefaultLayout, UnauthorizedLayout } from '@layouts';
import { ErrorPage } from '@pages/Error';
import { baseRoutes, myAccountRoutes } from '@routes/children-routes';
import { ROUTES } from '@routes/routes';
import { AuthenticationStatusLoader } from '@services/loaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: ROUTES.home,
        element: <UnauthorizedLayout />,
        children: baseRoutes,
      },
      {
        path: ROUTES.myAccount.base,
        element: <AuthorizedLayout />,
        id: 'auth',
        loader: AuthenticationStatusLoader,
        children: myAccountRoutes,
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
