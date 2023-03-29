import { CheckCircleIcon } from '@chakra-ui/icons';
import React from 'react';

import { ROUTES } from '@routes/routes';
import { AuthFormContainer } from '@ui/auths';
import { Information } from '@ui/Information/Information';

export const SuccessfulSignUp = () => {
  return (
    <AuthFormContainer>
      <Information
        Icon={CheckCircleIcon}
        title='Dziękujemy za rejestracje'
        content='Sprawdź swoją skrzynkę odbiorczą i kliknij w link aktywacyjny, aby aktywować swoje konto.'
        to={ROUTES.signIn}
        buttonText='Zaloguj się'
      />
    </AuthFormContainer>
  );
};
