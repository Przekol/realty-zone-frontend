import { Box, Image } from '@chakra-ui/react';
import React from 'react';

import { RealtyZoneLogo } from '@assets';
import { CustomLink } from '@base/CustomLink';
import { ROUTES } from '@routes/routes';

export const Logo = () => {
  return (
    <Box w={40}>
      <CustomLink to={ROUTES.home}>
        <Image src={RealtyZoneLogo} />
      </CustomLink>
    </Box>
  );
};
