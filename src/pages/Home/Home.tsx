import React from 'react';

import { services } from '@utils/data/services';

import { HomeHeader } from '../../components/headers';
import { ServicesSection } from '../../components/sections/ServicesSection';

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <main>
        <ServicesSection services={services} />
      </main>
    </>
  );
};
