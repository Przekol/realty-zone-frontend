import { HeroButtons } from '@frontendTypes';

import { ROUTES } from '../routes';

export const homeHeaderHeroButtons: HeroButtons[] = [
  {
    label: 'Znajdź nieruchomość',
    to: ROUTES.offers,
    colorScheme: 'blue.400',
    hoverBg: 'blue.500',
  },
  {
    label: 'Skontaktuj się z nami',
    to: ROUTES.contact,
    colorScheme: 'blackAlpha.400',
    hoverBg: 'blackAlpha.500',
  },
];
