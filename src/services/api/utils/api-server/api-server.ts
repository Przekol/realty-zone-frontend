import { ClientApiResponse } from '@backendTypes';

import { handleRequestWithRefreshTokens } from './handle-request-with-refresh-tokens';
import { OptionsApiServer } from './types';

import { AbstractApiClient } from '../abstract-api-client';

const apiServer = new AbstractApiClient(import.meta.env.VITE_BACKEND_API);

interface PostOptionsApiServer<RequestBody, ResponseT> extends OptionsApiServer<ResponseT> {
  data: RequestBody;
}

type GetOptionsApiServer<ResponseT> = OptionsApiServer<ResponseT>;

export const ApiServer = {
  post: async <RequestBody, ResponseT>(
    postOptions: PostOptionsApiServer<RequestBody, ResponseT>,
  ): Promise<ClientApiResponse<ResponseT>> => {
    return handleRequestWithRefreshTokens(postOptions, () =>
      apiServer.post<RequestBody, ClientApiResponse<ResponseT>>(
        postOptions.endpoint,
        postOptions.data,
        postOptions.options,
        postOptions.isAuthorized,
      ),
    );
  },

  get: async <ResponseT>(getOptions: GetOptionsApiServer<ResponseT>): Promise<ClientApiResponse<ResponseT>> => {
    return handleRequestWithRefreshTokens(getOptions, () =>
      apiServer.get<ClientApiResponse<ResponseT>>(getOptions.endpoint, getOptions.options, getOptions.isAuthorized),
    );
  },
};
