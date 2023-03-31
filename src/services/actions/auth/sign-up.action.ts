import { ActionFunctionArgs, redirect } from 'react-router-dom';

import { ROUTES } from '@routes/routes';
import { signUpApi } from '@services/api/methods/auth';

export const SignUpAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  await signUpApi({ email, password });

  return redirect(ROUTES.auth.successful.signUp);
};
