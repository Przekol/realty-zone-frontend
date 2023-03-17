import { Link, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export const NavigationLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={to}
  >
    {children}
  </Link>
);
