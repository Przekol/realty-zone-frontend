import { Link, Stack } from '@chakra-ui/react';
import React from 'react';

import { MenuLink } from '@typesFrontend';

interface Props {
  links: MenuLink[];
}
export const FooterMenu = ({ links }: Props) => {
  return (
    <Stack direction={'row'} spacing={6}>
      {links.map((link) => (
        <Link key={link.to} href={link.to}>
          {link.label}
        </Link>
      ))}
    </Stack>
  );
};
