import { Box, Image } from '@chakra-ui/react';
import React from 'react';

import RealtyZoneLogo from '../../assets/realty_zone_logo.png';
export const Logo = () => {
  return (
    <Box w={40}>
      <Image src={RealtyZoneLogo} />
    </Box>
  );
};
