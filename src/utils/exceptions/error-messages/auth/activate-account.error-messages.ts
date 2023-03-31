import { errorMessages } from '@utils/exceptions';

import { ErrorMessages } from '@frontendTypes';

export const activateAccountErrorMessages: ErrorMessages = {
  ...errorMessages,
  401: 'Niepoprawny token aktywacyjny.',
};
