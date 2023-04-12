import { ActionFunctionArgs, redirect } from 'react-router-dom';

import { ROUTES } from '@routes/routes';
import { updateProfileApi } from '@services/api/methods/profile';

export const UpdateProfileAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const phoneNumber = formData.get('phoneNumber') as string;
  const username = formData.get('username') as string;

  await updateProfileApi({ firstName, lastName, phoneNumber, username });
  return redirect(ROUTES.myAccount.base);
};
