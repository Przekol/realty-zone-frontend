import { ValidTokenRequest } from '@backendTypes';

import { ENDPOINTS } from '@services/api/methods/endpoints';
import { ApiServer } from '@services/api/utils/api-server';
import { activateAccountErrorMessages } from '@utils/exceptions/error-messages/auth';

export const activateAccountApi = ({ token, type }: ValidTokenRequest) => {
  return ApiServer.post<null, null>({
    endpoint: `${ENDPOINTS.emailConfirmationConfirm}?token=${token}&type=${type}`,
    data: null,
    customErrorMessages: activateAccountErrorMessages,
  });
};
