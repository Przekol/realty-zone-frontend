import { Stack } from '@chakra-ui/react';
import React from 'react';

import { SocialLink } from '@frontendTypes';

import { SocialButton } from './components';

interface Props {
  links: SocialLink[];
}

export const SocialButtons = ({ links }: Props) => {
  return (
    <Stack direction={'row'} spacing={6}>
      {links.map((link) => (
        <SocialButton key={link.label} label={link.label} href={link.to}>
          <link.icon />
        </SocialButton>
      ))}
    </Stack>
  );
};
