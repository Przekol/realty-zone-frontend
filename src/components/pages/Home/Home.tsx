import React from 'react';

import { HomeHeader } from '@templates/headers/HomeHeader';
import { ServicesSection } from '@templates/sections/ServicesSection';
import { services } from '@utils/data/services';

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
