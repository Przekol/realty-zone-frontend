import { getAuthenticationStatusApi } from '@services/api/methods/auth';

export const AuthenticationStatusLoader = async () => {
  const response = await getAuthenticationStatusApi();
  if (response.ok) {
    const authenticatedStatus = response.data;
    if (!authenticatedStatus) {
      return { isAuthenticated: false };
    }
    return authenticatedStatus;
  } else {
    return { isAuthenticated: false };
  }
};
