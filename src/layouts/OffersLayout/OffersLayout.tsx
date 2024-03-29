import React from 'react';
import { Outlet } from 'react-router-dom';

import { ContentWrapper } from '@base/ContentWrapper';

export const OffersLayout = () => (
  <ContentWrapper>
    <Outlet />
  </ContentWrapper>
);
