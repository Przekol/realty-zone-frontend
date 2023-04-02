import { ClientApiResponse } from '@backendTypes';

import { handleApiErrors } from '@utils/exceptions/handle-errors/handle-api-errors';

import { ErrorMessages } from '@frontendTypes';

import { AbstractApiClient } from '../abstract-api-client';

const apiServer = new AbstractApiClient(import.meta.env.VITE_BACKEND_API);

export const ApiServer = {
  post: async <RequestBody, ResponseT>(
    endpoint: string,
    data: RequestBody,
    customErrorMessages: ErrorMessages,
    onErrorCallback?: (response: ClientApiResponse<ResponseT>) => Promise<ClientApiResponse<ResponseT>>,
  ): Promise<ClientApiResponse<ResponseT>> => {
    const response = apiServer.post<RequestBody, ClientApiResponse<ResponseT>>(endpoint, data, {
      credentials: 'include',
    });

    return handleApiErrors<ResponseT>(response, customErrorMessages, onErrorCallback);
  },

  get: async <ResponseT>(
    endpoint: string,
    customErrorMessages: ErrorMessages,
    onErrorCallback?: (response: ClientApiResponse<ResponseT>) => Promise<ClientApiResponse<ResponseT>>,
  ): Promise<ClientApiResponse<ResponseT>> => {
    const response = apiServer.get<ClientApiResponse<ResponseT>>(endpoint, {
      credentials: 'include',
    });

    return handleApiErrors<ResponseT>(response, customErrorMessages, onErrorCallback);
  },
};
