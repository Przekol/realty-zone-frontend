import { Button, Stack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export const FormButton = ({ children }: Props) => (
  <Stack spacing={10} pt={2}>
    <Button
      type='submit'
      loadingText='Submitting'
      size='lg'
      bg={'blue.400'}
      color={'white'}
      _hover={{
        bg: 'blue.500',
      }}
    >
      {children}
    </Button>
  </Stack>
);
