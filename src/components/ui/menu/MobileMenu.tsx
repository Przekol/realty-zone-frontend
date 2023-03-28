import { Box, Stack } from '@chakra-ui/react';
import React from 'react';

import { NavigationLinks } from '@ui/NavigationLinks';

import { MenuLink } from '@frontendTypes';

interface Props {
  links: MenuLink[];
}
export const MobileMenu = ({ links }: Props) => (
  <Box pb={4} display={{ md: 'none' }}>
    <Stack as={'nav'} spacing={4}>
      <NavigationLinks links={links} />
    </Stack>
  </Box>
);
