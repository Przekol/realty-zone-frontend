import React from 'react';

import { homeHeaderHeroButtons } from '@utils/data/hero-buttons';

import { Header } from './Header';

import { HeroHeaderHome } from '../../assets';
import { Hero } from '../Hero/Hero';

export const HomeHeader = () => (
  <Header backgroundImage={HeroHeaderHome}>
    <Hero text='Znajdź klucz do wymarzonego domu' buttons={homeHeaderHeroButtons} />
  </Header>
);
