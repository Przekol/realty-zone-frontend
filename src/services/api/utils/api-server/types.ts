import { ClientApiResponse } from '@backendTypes';

import { ErrorMessages } from '@frontendTypes';

export interface OptionsApiServer<ResponseT> {
  endpoint: string;
  customErrorMessages: ErrorMessages;
  onErrorCallback?: (response: ClientApiResponse<ResponseT>) => Promise<ClientApiResponse<ResponseT>>;
  options?: RequestInit;
  isAuthorized?: boolean;
}
