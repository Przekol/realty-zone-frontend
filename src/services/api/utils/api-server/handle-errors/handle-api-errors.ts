import { ClientApiResponse } from '@backendTypes';

import { refreshTokensApi } from '@services/api/methods/auth';
import { CustomError, errorMessages } from '@utils/exceptions';

import { ErrorMessages } from '@frontendTypes';

import { handleResponseError } from './handle-response-error';

interface HandleApiErrorsOptions<T> {
  response: Promise<ClientApiResponse<T>>;
  customErrorMessages: ErrorMessages;
  onErrorCallback?: (response: ClientApiResponse<T>) => Promise<ClientApiResponse<T>>;
  shouldRefreshTokens?: boolean;
  onRefreshTokensCallback?: () => Promise<ClientApiResponse<T>>;
}

export const handleApiErrors = async <T>(options: HandleApiErrorsOptions<T>): Promise<ClientApiResponse<T>> => {
  try {
    options = { ...options, shouldRefreshTokens: options.shouldRefreshTokens && true };
    const response = await options.response;
    const onErrorCallback = options.onErrorCallback;
    if (!response.ok) {
      if (response.status === 401 && response.error?.code === 'TOKEN_EXPIRED') {
        await refreshTokensApi();
        return options.onRefreshTokensCallback ? await options.onRefreshTokensCallback() : response;
      }
      if (onErrorCallback) {
        return onErrorCallback(response);
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
