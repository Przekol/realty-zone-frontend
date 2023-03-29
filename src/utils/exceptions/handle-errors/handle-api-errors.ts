import { ClientApiResponse } from '@backendTypes';

import { CustomError, errorMessages } from '@utils/exceptions';
import { handleResponseError } from '@utils/exceptions/handle-errors/handle-response-error';

import { ErrorMessages } from '@frontendTypes';

export const handleApiErrors = async <T>(
  request: Promise<ClientApiResponse<T>>,
  customErrorMessages: ErrorMessages,
): Promise<ClientApiResponse<T>> => {
  try {
    const response = await request;

    if (!response.ok) {
      handleResponseError(response.status, customErrorMessages);
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
