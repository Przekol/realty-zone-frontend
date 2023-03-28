import React from 'react';

import { MainFooter } from '@templates/footers';
import { MainNavigation } from '@templates/navigations';

interface Props {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: Props) => (
  <>
    <MainNavigation />
    {children}
    <MainFooter />
  </>
);
