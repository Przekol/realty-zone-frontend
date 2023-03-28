import { useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { CustomLink } from '@base/CustomLink';

export const NavigationLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <CustomLink
    px={2}
    py={1}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('blue.500', 'blue.700'),
    }}
    to={to}
  >
    {children}
  </CustomLink>
);
