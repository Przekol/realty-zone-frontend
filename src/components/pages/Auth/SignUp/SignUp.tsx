import { Stack } from '@chakra-ui/react';
import React from 'react';

import { SignUpForm } from '@forms/auth/SignUpForm';
import { AuthFormCard, AuthFormContainer, AuthFormLinks } from '@ui/auths';
import { AuthFormCaption } from '@ui/captions';
import { signUpLinks } from '@utils/data/links';

export const SignUp = () => {
  return (
    <AuthFormContainer>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <AuthFormCaption title='Zarejestruj się' description='i ciesz się wszystkimi naszymi funkcjonalnościami' />
        <AuthFormCard>
          <SignUpForm />
          <AuthFormLinks links={signUpLinks} />
        </AuthFormCard>
      </Stack>
    </AuthFormContainer>
  );
};
