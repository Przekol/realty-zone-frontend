import { ClientApiResponse } from '@backendTypes';

import { handleApiErrors } from './handle-errors';
import { OptionsApiServer } from './types';

export const handleRequestWithRefreshTokens = async <OptionsT extends OptionsApiServer<ResponseT>, ResponseT>(
  requestOptions: OptionsT,
  apiRequest: () => Promise<ClientApiResponse<ResponseT>>,
): Promise<ClientApiResponse<ResponseT>> => {
  const response = apiRequest();

  return handleApiErrors<ResponseT>({
    response,
    customErrorMessages: requestOptions.customErrorMessages,
    onErrorCallback: requestOptions.onErrorCallback,
    shouldRefreshTokens: true,
    onRefreshTokensCallback: async () => {
      const response = apiRequest();
      return handleApiErrors<ResponseT>({
        response,
        customErrorMessages: requestOptions.customErrorMessages,
        onErrorCallback: requestOptions.onErrorCallback,
        shouldRefreshTokens: false,
      });
    },
  });
};
