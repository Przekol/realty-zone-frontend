import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import React from 'react';

import { CenterContainer } from '@base/CenterContainer';
import { AuthFormButton, AuthFormCard, AuthFormLinks } from '@ui/auths';
import { AuthFormCaption } from '@ui/captions';
import { signInLinks } from '@utils/data/links';

export const SignIn = () => {
  return (
    <CenterContainer maxW={'md'}>
      <AuthFormCaption title='Zaloguj się' description='i ciesz się wszystkimi naszymi funkcjonalnościami' />
      <AuthFormCard>
        <Stack spacing={4}>
          <FormControl id='email'>
            <FormLabel>Email</FormLabel>
            <Input type='email' />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Hasło</FormLabel>
            <Input type='password' />
          </FormControl>
          <AuthFormButton>Zaloguj się</AuthFormButton>
          <AuthFormLinks links={signInLinks} />
        </Stack>
      </AuthFormCard>
    </CenterContainer>
  );
};
