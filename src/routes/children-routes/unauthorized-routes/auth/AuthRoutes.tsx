import React from 'react';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

import { AuthErrorPage, ForgetPassword, SignIn, SignUp } from '@pages/Auth';
import { StatusMessage } from '@pages/StatusMessage';
import { ROUTES } from '@routes/routes';
import { SignInAction, SignUpAction } from '@services/actions';
import { ActivateAccountLoader } from '@services/loaders';
import { authMessages } from '@utils/data/messages';

const authSuccessRoutes: RouteObject[] = [
  { index: true, element: <Navigate to={ROUTES.auth.signIn} /> },
  { path: ROUTES.auth.successful.signUp, element: <StatusMessage message={authMessages.successfulSignUp} /> },
  {
    path: ROUTES.auth.successful.activation,
    element: <StatusMessage message={authMessages.activationSuccessful} />,
  },
];

export const authRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to={ROUTES.auth.signIn} />,
  },
  {
    path: ROUTES.auth.signIn,
    element: <SignIn />,
    action: SignInAction,
  },
  {
    path: ROUTES.auth.signUp,
    element: <SignUp />,
    action: SignUpAction,
  },
  { path: ROUTES.auth.forgetPassword, element: <ForgetPassword /> },
  {
    path: ROUTES.auth.activateAccount,
    loader: ActivateAccountLoader,
    element: <Navigate to={ROUTES.auth.successful.activation} />,
    errorElement: <AuthErrorPage to={ROUTES.home} buttonName={'Powrót na stronę główną'} />,
  },
  {
    path: ROUTES.auth.successful.base,
    element: <Outlet />,
    children: authSuccessRoutes,
  },
];
