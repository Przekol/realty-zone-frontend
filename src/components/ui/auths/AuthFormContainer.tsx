import { Flex, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export const AuthFormContainer = ({ children }: Props) => {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      {children}
    </Flex>
  );
};
