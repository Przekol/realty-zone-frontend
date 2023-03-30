import { Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}
export const DescriptionInformation = ({ children }: Props) => {
  return (
    <Text fontSize={'md'} color={'blue.700'} p={2}>
      {children}
    </Text>
  );
};
