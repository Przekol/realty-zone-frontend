import { ClientApiResponse } from '@backendTypes';

import { handleApiErrors } from '@utils/exceptions/handle-errors/handle-api-errors';

import { ErrorMessages } from '@frontendTypes';

import { AbstractApiClient } from '../abstract-api-client';

const apiServer = new AbstractApiClient(import.meta.env.VITE_BACKEND_API);

interface OptionsApiServer<ResponseT> {
  endpoint: string;
  customErrorMessages: ErrorMessages;
  onErrorCallback?: (response: ClientApiResponse<ResponseT>) => Promise<ClientApiResponse<ResponseT>>;
  options?: RequestInit;
  isAuthorized?: boolean;
}

interface PostOptionsApiServer<RequestBody, ResponseT> extends OptionsApiServer<ResponseT> {
  data: RequestBody;
}

type GetOptionsApiServer<ResponseT> = OptionsApiServer<ResponseT>;

export const ApiServer = {
  post: async <RequestBody, ResponseT>(
    postOptions: PostOptionsApiServer<RequestBody, ResponseT>,
  ): Promise<ClientApiResponse<ResponseT>> => {
    const response = apiServer.post<RequestBody, ClientApiResponse<ResponseT>>(
      postOptions.endpoint,
      postOptions.data,
      postOptions.options,
      postOptions.isAuthorized,
    );

    return handleApiErrors<ResponseT>(response, postOptions.customErrorMessages, postOptions.onErrorCallback);
  },

  get: async <ResponseT>(getOptions: GetOptionsApiServer<ResponseT>): Promise<ClientApiResponse<ResponseT>> => {
    const response = apiServer.get<ClientApiResponse<ResponseT>>(
      getOptions.endpoint,
      getOptions.options,
      getOptions.isAuthorized,
    );

    return handleApiErrors<ResponseT>(response, getOptions.customErrorMessages, getOptions.onErrorCallback);
  },
};
