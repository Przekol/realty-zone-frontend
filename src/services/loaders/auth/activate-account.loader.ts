import { TokenOptions } from '@backendTypes';
import { LoaderFunctionArgs } from 'react-router-dom';

import { activateAccountApi } from '@services/api/methods/auth';

export const ActivateAccountLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const token = url.searchParams.get('token') as string;
  const type = url.searchParams.get('type') as TokenOptions['tokenType'];

  await activateAccountApi({ token, type });
  return null;
};
