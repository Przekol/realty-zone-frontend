import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { ROUTES } from './routes';

import { AuthLayout, AuthorizedLayout, OffersLayout, UnauthorizedLayout } from '../layouts';
import { ForgetPassword, SignIn, SignUp } from '../pages/Auth';
import { Home } from '../pages/Home';
import { AddOffer, MyAccount, Profile } from '../pages/MyAccount';
import { Offers } from '../pages/Offers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UnauthorizedLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.auth,
        element: <AuthLayout />,

        children: [
          {
            index: true,
            element: <Navigate to={ROUTES.signIn} />,
          },
          {
            path: ROUTES.signIn,
            element: <SignIn />,
          },
          {
            path: ROUTES.signUp,
            element: <SignUp />,
          },
          { path: ROUTES.forgetPassword, element: <ForgetPassword /> },
        ],
      },
      {
        path: ROUTES.offers,
        element: <OffersLayout />,
        children: [{ index: true, element: <Offers /> }],
      },
    ],
  },
  {
    path: ROUTES.myAccount,
    element: <AuthorizedLayout />,
    children: [
      {
        path: ROUTES.myAccount,
        element: <MyAccount />,
        children: [
          { index: true, element: <Profile /> },
          { path: '/my-account/add-announcement', element: <AddOffer /> },
        ],
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
