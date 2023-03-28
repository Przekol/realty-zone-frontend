import { Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { CustomLink } from '@base/CustomLink';

import { MenuLink } from '@frontendTypes';

interface Props {
  links: MenuLink[];
}
export const FooterMenu = ({ links }: Props) => {
  return (
    <Stack direction={'row'} spacing={6}>
      {links.map((link) => (
        <CustomLink
          key={link.to}
          to={link.to}
          _hover={{
            textDecoration: 'none',
            color: useColorModeValue('blue.500', 'blue.700'),
          }}
        >
          {link.label}
        </CustomLink>
      ))}
    </Stack>
  );
};
