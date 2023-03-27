import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import React from 'react';

import { signInLinks } from '@utils/data/links';

import { FormButton, FormCard, FormContainer, FormFooter, FormHeading } from '../../../components/Form';

export const SignIn = () => {
  return (
    <FormContainer>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <FormHeading title='Zaloguj się' description='i ciesz się wszystkimi naszymi funkcjonalnościami' />
        <FormCard>
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>Email</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Hasło</FormLabel>
              <Input type='password' />
            </FormControl>
            <FormButton>Zaloguj się</FormButton>
            <FormFooter links={signInLinks} />
          </Stack>
        </FormCard>
      </Stack>
    </FormContainer>
  );
};
