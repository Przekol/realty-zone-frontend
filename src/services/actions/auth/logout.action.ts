import { logoutApi } from '@services/api/methods/auth';

export const LogoutAction = async () => {
  await logoutApi();
  return null;
};
