import { Stack, Text } from '@chakra-ui/react';
import React from 'react';

import { CustomLink } from '@base/CustomLink';

import { FormLink } from '@frontendTypes';

interface Props {
  links: FormLink[];
}
export const AuthFormLinks = ({ links }: Props) => {
  return (
    <Stack pt={6}>
      {links.map((link) => (
        <Text key={link.to} align={'center'}>
          {link.text}{' '}
          <CustomLink color={'blue.400'} to={link.to} _hover={{ color: 'blue.600' }}>
            {link.label}
          </CustomLink>
        </Text>
      ))}
    </Stack>
  );
};
