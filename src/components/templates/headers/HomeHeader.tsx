import React from 'react';

import { HeroHeaderHome } from '@assets';
import { BackgroundHeader } from '@ui/BackgroundHeader';
import { Hero } from '@ui/Hero';
import { homeHeaderHeroButtons } from '@utils/data/hero-buttons';

export const HomeHeader = () => (
  <BackgroundHeader backgroundImage={HeroHeaderHome}>
    <Hero text='Znajdź klucz do wymarzonego domu' buttons={homeHeaderHeroButtons} />
  </BackgroundHeader>
);
