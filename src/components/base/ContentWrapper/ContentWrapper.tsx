import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export const ContentWrapper = ({ children }: Props) => {
  return (
    <Flex flexGrow={1} width='100%' alignItems='center' justifyContent='center'>
      {children}
    </Flex>
  );
};
