import { Button, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { HeroButtons } from '@frontendTypes';

type Props = HeroButtons;

export const HeroButton = ({ label, to, colorScheme, hoverBg }: Props) => (
  <Link as={RouterLink} to={to} _hover={{ textDecoration: 'none' }}>
    <Button bg={colorScheme} rounded={'full'} color={'white'} _hover={{ bg: hoverBg }}>
      {label}
    </Button>
  </Link>
);
