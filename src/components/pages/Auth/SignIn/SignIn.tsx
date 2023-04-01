import { AuthenticatedStatusResponse } from '@backendTypes';
import React from 'react';
import { useActionData } from 'react-router-dom';

import { CenterContainer } from '@base/CenterContainer';
import { useAuth } from '@context/auth';
import { SignInForm } from '@forms/auth';
import { AuthFormCard, AuthFormLinks } from '@ui/auths';
import { AuthFormCaption } from '@ui/captions';
import { signInLinks } from '@utils/data/links';

export const SignIn = () => {
  const { dispatch } = useAuth();
  const authenticatedStatus = useActionData() as AuthenticatedStatusResponse;

  // useEffect(() => {
  //   if (authenticatedStatus) {
  //     console.log('authenticatedStatus-SignIn', authenticatedStatus);
  //     dispatch({ type: 'SET_AUTHENTICATED', payload: authenticatedStatus.isAuthenticated });
  //   }
  // }, [authenticatedStatus]);

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
