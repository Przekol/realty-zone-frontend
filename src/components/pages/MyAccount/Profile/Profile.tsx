import { Button } from '@chakra-ui/react';
import React from 'react';

import { CustomLink } from '@base/CustomLink';
import { ROUTES } from '@routes/routes';

export const Profile = () => {
  return (
    <div>
      Profil użytkownika
      <CustomLink to={ROUTES.myAccount.addOffer}>
        <Button>Dodaj ofertę</Button>
      </CustomLink>
    </div>
  );
};
