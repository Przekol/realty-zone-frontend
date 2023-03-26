import { Link, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const NavigationLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('blue.500', 'blue.700'),
    }}
    to={to}
  >
    {children}
  </Link>
);
