import React from 'react';

import { Header } from './Header';

import { HeroHeaderHome } from '../../assets';
import { homeHeaderHeroButtons } from '../../data/hero-buttons';
import { Hero } from '../Hero/Hero';

export const HomeHeader = () => (
  <Header backgroundImage={HeroHeaderHome}>
    <Hero text='Znajdź klucz do wymarzonego domu' buttons={homeHeaderHeroButtons} />
  </Header>
);
