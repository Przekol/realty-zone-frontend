import { errorMessages } from '@utils/exceptions';

import { ErrorMessages } from '@frontendTypes';

export const signInErrorMessages: ErrorMessages = {
  ...errorMessages,
  401: 'Podano nieprawidłowe dane uwierzytelniające lub konto nie zostało aktywowane',
};
