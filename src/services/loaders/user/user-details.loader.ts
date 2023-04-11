import { UserProfileResponse } from '@backendTypes';

import { getUserDetailsApi } from '@services/api/methods/user';

export const UserDetailsLoader = async (): Promise<UserProfileResponse | null> => {
  const response = await getUserDetailsApi();
  if (response.ok) {
    const userDetails = response.data;
    if (!userDetails) {
      return null;
    }
    return userDetails;
  } else {
    return null;
  }
};
