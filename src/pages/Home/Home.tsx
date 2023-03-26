import React from 'react';

import { HomeHeader } from '../../components/headers';
import { ServicesSection } from '../../components/sections/ServicesSection';
import { services } from '../../data/services';

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
