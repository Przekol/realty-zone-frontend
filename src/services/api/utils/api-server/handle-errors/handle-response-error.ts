import { CustomError, errorMessages } from '@utils/exceptions';

import { ErrorMessages } from '@frontendTypes';

export const handleResponseError = (status: number, customErrorMessages: ErrorMessages) => {
  if (status >= 400 && status <= 404) {
    if (Object.prototype.hasOwnProperty.call(customErrorMessages, status)) {
      throw new CustomError(customErrorMessages[status], status);
    }
  } else {
    throw new CustomError(errorMessages[500], 500);
  }
};
