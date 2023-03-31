import React from 'react';
import { Outlet } from 'react-router-dom';

import { ContentWrapper } from '@base/ContentWrapper';

export const AuthLayout = () => (
  <ContentWrapper>
    <Outlet />
  </ContentWrapper>
);
