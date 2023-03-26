import { Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

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
          <Link as={RouterLink} color={'blue.400'} to={link.to} _hover={{ color: 'blue.600' }}>
            {link.label}
          </Link>
        </Text>
      ))}
    </Stack>
  );
};
