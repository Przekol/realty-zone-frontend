import { Heading } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
export const SubTitleInformation = ({ children }: Props) => {
  return (
    <Heading as='h3' size='md' mt={6} mb={2}>
      {children}
    </Heading>
  );
};
