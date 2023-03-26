import { Link, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const NavigationLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={to}
  >
    {children}
  </Link>
);
