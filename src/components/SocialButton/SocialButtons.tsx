import { Stack } from '@chakra-ui/react';
import React from 'react';

import { SocialLink } from '@typesFrontend';

import { SocialButton } from './SocialButton';

interface Props {
  links: SocialLink[];
}

export const SocialButtons = ({ links }: Props) => {
  return (
    <Stack direction={'row'} spacing={6}>
      {links.map((link) => (
        <SocialButton key={link.label} label={link.label} href={link.href}>
          <link.icon />
        </SocialButton>
      ))}
    </Stack>
  );
};
