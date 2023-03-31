import React from 'react';

import { CenterContainer } from '@base/CenterContainer';
import { SignUpForm } from '@forms/auth/SignUpForm';
import { AuthFormCard, AuthFormLinks } from '@ui/auths';
import { AuthFormCaption } from '@ui/captions';
import { signUpLinks } from '@utils/data/links';

export const SignUp = () => {
  return (
    <CenterContainer maxW={'md'}>
      <AuthFormCaption title='Zarejestruj się' description='i ciesz się wszystkimi naszymi funkcjonalnościami' />
      <AuthFormCard>
        <SignUpForm />
        <AuthFormLinks links={signUpLinks} />
      </AuthFormCard>
    </CenterContainer>
  );
};
