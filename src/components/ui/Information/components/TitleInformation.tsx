import { Heading } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
export const TitleInformation = ({ children }: Props) => {
  return (
    <Heading as='h2' size='2xl' bgGradient='linear(to-r, blue.400, blue.600)' backgroundClip='text' p={4}>
      {children}
    </Heading>
  );
};
