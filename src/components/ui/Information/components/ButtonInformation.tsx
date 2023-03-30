import { Button } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export const ButtonInformation = ({ children, onClick }: Props) => {
  return (
    <Button
      onClick={onClick}
      colorScheme='blue'
      bgGradient='linear(to-r, blue.400, blue.500, blue.600)'
      color='white'
      variant='solid'
      mt={4}
    >
      {children}
    </Button>
  );
};
