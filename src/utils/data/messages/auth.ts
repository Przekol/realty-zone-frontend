import { ROUTES } from '@routes/routes';

import { MessageInformation } from '@frontendTypes';

type AuthMessages = {
  successfulSignUp: MessageInformation;
  activationSuccessful: MessageInformation;
  [key: string]: MessageInformation; // dowolne inne klucze również są dozwolone
};
export const authMessages: AuthMessages = {
  successfulSignUp: {
    title: 'Dziękujemy za rejestracje',
    description: 'Sprawdź swoją skrzynkę odbiorczą i kliknij w link aktywacyjny, aby aktywować swoje konto.',
    buttonName: 'Zaloguj się',
    to: ROUTES.auth.signIn,
    type: 'success',
  },
  activationSuccessful: {
    title: 'Konto zostało aktywowane',
    description: 'Możesz się zalogować.',
    buttonName: 'Zaloguj się',
    to: ROUTES.auth.signIn,
    type: 'success',
  },
};
