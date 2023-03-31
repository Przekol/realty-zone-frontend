import React from 'react';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

import { ForgetPassword, SignIn, SignUp } from '@pages/Auth';
import { StatusMessage } from '@pages/StatusMessage';
import { ROUTES } from '@routes/routes';
import { ActivateAccountLoader, SignUpAction } from '@services/actions/auth';
import { authMessages } from '@utils/data/messages';

const authSuccessRoutes: RouteObject[] = [
  { index: true, element: <Navigate to={ROUTES.auth.signIn} /> },
  { path: ROUTES.auth.successful.signUp, element: <StatusMessage message={authMessages.successfulSignUp} /> },
  {
    path: ROUTES.auth.successful.activation,
    element: <StatusMessage message={authMessages.successfulSignUp} />,
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
  },
  {
    path: ROUTES.auth.signUp,
    element: <SignUp />,
    action: SignUpAction,
  },
  { path: ROUTES.auth.forgetPassword, element: <ForgetPassword /> },
  { path: ROUTES.auth.activateAccount, loader: ActivateAccountLoader },
  {
    path: ROUTES.auth.successful.base,
    element: <Outlet />,
    children: authSuccessRoutes,
  },
];
