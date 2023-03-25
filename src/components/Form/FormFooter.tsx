import { Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import { FormLink } from '@frontendTypes';

interface Props {
  links: FormLink[];
}
export const FormFooter = ({ links }: Props) => {
  return (
    <Stack pt={6}>
      {links.map((link) => (
        <Text key={link.to} align={'center'}>
          {link.text}{' '}
          <Link color={'blue.400'} href={link.to}>
            {link.label}
          </Link>
        </Text>
      ))}
    </Stack>
  );
};
