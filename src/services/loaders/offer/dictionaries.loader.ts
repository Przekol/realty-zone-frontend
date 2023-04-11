import { DictionaryResponse } from '@backendTypes';

import { getDictionariesApi } from '@services/api/methods/offer';

export const DictionariesLoader = async (): Promise<DictionaryResponse | null> => {
  const response = await getDictionariesApi();
  if (response.ok) {
    const dictionaries = response.data;

    if (!dictionaries) {
      return null;
    }
    return dictionaries;
  } else {
    return null;
  }
};
