import { DictionaryResponse } from '@backendTypes';

import { ENDPOINTS } from '@services/api/methods/endpoints';
import { ApiServer } from '@services/api/utils/api-server';
import { errorMessages } from '@utils/exceptions';

export const getDictionariesApi = async () => {
  return ApiServer.get<DictionaryResponse>({
    endpoint: ENDPOINTS.dictionaries,
    customErrorMessages: errorMessages,
  });
};
