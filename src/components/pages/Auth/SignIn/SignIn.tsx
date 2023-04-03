import React from 'react';

import { CenterContainer } from '@base/CenterContainer';
import { SignInForm } from '@forms/auth';
import { AuthFormCard, AuthFormLinks } from '@ui/auths';
import { AuthFormCaption } from '@ui/captions';
import { signInLinks } from '@utils/data/links';

export const SignIn = () => {
  return (
    <CenterContainer maxW={'md'}>
      <AuthFormCaption title='Zaloguj się' description='i ciesz się wszystkimi naszymi funkcjonalnościami' />
      <AuthFormCard>
        <SignInForm />
        <AuthFormLinks links={signInLinks} />
      </AuthFormCard>
    </CenterContainer>
  );
};
