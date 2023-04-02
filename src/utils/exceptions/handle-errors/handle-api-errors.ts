import { ClientApiResponse } from '@backendTypes';

import { CustomError, errorMessages } from '@utils/exceptions';
import { handleResponseError } from '@utils/exceptions/handle-errors/handle-response-error';

import { ErrorMessages } from '@frontendTypes';

interface HandleApiErrorsOptions<T> {
  request: Promise<ClientApiResponse<T>>;
  customErrorMessages: ErrorMessages;
  onErrorCallback?: (response: ClientApiResponse<T>) => Promise<ClientApiResponse<T>>;
}
export const handleApiErrors = async <T>(options: HandleApiErrorsOptions<T>): Promise<ClientApiResponse<T>> => {
  try {
    const response = await options.request;

    if (!response.ok) {
      if (options.onErrorCallback) {
        return options.onErrorCallback(response);
      } else {
        handleResponseError(response.status, options.customErrorMessages);
      }
    }
    return response;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    } else {
      throw new CustomError(errorMessages[500], 500);
    }
  }
};
