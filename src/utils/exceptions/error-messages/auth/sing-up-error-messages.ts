import { errorMessages } from '@utils/exceptions';

import { ErrorMessages } from '@frontendTypes';

export const signUpErrorMessages: ErrorMessages = {
  ...errorMessages,
  400: 'Użytkownik o takim emailu ma już konto.',
};
