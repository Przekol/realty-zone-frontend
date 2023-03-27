import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { RealtyZoneLogo } from '../../assets';
import { ROUTES } from '../../routes';

export const Logo = () => {
  return (
    <Box w={40}>
      <Link to={ROUTES.home}>
        <Image src={RealtyZoneLogo} />
      </Link>
    </Box>
  );
};
