import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppLayout } from './pages/AppLayout';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
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
