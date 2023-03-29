import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { ForgetPassword, SignIn, SignUp, SuccessfulSignUp } from '@pages/Auth';
import { ErrorPage } from '@pages/Error';
import { Home } from '@pages/Home';
import { AddOffer, MyAccount, Profile } from '@pages/MyAccount';
import { Offers } from '@pages/Offers';
import { ROUTES } from '@routes/routes';

import { AuthLayout, AuthorizedLayout, OffersLayout, UnauthorizedLayout } from '../../layouts';
import { SignUpAction } from '../../services/actions/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UnauthorizedLayout />,
    errorElement: <ErrorPage />,
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
            action: SignUpAction,
          },
          { path: ROUTES.forgetPassword, element: <ForgetPassword /> },
          { path: ROUTES.successfulSignUp, element: <SuccessfulSignUp /> },
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
