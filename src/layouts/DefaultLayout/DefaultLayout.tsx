import React from 'react';

import { Footer } from '../../components/Footer';
import { Navigation } from '../../components/Navigation';

interface Props {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: Props) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
);
