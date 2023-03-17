import { Box, Stack } from '@chakra-ui/react';
import React from 'react';

import { LinkType } from '@typesFrontend';

import { NavigationLinks } from './NavigationLinks';

interface Props {
  links: LinkType[];
}
export const NavigationMobile = ({ links }: Props) => (
  <Box pb={4} display={{ md: 'none' }}>
    <Stack as={'nav'} spacing={4}>
      <NavigationLinks links={links} />
    </Stack>
  </Box>
);
