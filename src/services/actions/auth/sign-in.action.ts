import { ActionFunctionArgs, redirect } from 'react-router-dom';

import { ROUTES } from '@routes/routes';
import { signInApi } from '@services/api/methods/auth';

export const SignInAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const response = await signInApi({ email, password });

  if (response.ok) {
    const user = response.data;

    if (!user) {
      return redirect(ROUTES.auth.signIn);
    }
    return user;
  }
};
