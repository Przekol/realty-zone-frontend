import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export const FormCard = ({ children }: Props) => {
  return (
    <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
      {children}
    </Box>
  );
};
