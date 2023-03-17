import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from './data/routes';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.signIn,
        element: <SignIn />,
      },
      {
        path: ROUTES.signUp,
        element: <SignUp />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
