import React from 'react';
import { Outlet } from 'react-router-dom';

export const MyAccount = () => (
  <div>
    <header>Moje konto</header>
    <div>
      <Outlet />
    </div>
  </div>
);
