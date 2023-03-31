import { ClientApiResponse } from '@backendTypes';

import { handleApiErrors } from '@utils/exceptions/handle-errors/handle-api-errors';

import { ErrorMessages } from '@frontendTypes';

import { AbstractApiClient } from '../abstract-api-client';

const apiSever = new AbstractApiClient(import.meta.env.VITE_BACKEND_API);

export const ApiServer = {
  post: async <RequestBody, ResponseT>(
    endpoint: string,
    data: RequestBody,
    customErrorMessages: ErrorMessages,
  ): Promise<ClientApiResponse<ResponseT>> => {
    const response = apiSever.post<RequestBody, ClientApiResponse<ResponseT>>(endpoint, data, {
      credentials: 'include',
    });

    return handleApiErrors<ResponseT>(response, customErrorMessages);
  },
};
