import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
