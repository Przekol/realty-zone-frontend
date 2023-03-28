import React from 'react';
import { Outlet } from 'react-router-dom';

export const OffersLayout = () => (
  <>
    <header>Oferty nieruchomości</header>
    <Outlet />
  </>
);
