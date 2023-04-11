import { ActionFunctionArgs } from 'react-router-dom';

export const AddOfferAction = async ({ request }: ActionFunctionArgs) => {
  // const title = formData.get('title') as string;
  // const description = formData.get('description') as string;
  // const street = formData.get('address.street') as string;
  // const market = formData.get('dictionaries.market') as string;
  // const transaction = formData.get('dictionariesTransaction') as string;
  // const data = JSON.parse(formData);
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  console.log(updates);
  return null;
};
