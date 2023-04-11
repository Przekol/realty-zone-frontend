import { OneOfferAddressResponse } from '@backendTypes';
import { HStack, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  address: OneOfferAddressResponse;
}
export const OfferAddress = ({ address }: Props) => {
  return (
    <HStack align='start' spacing={2} bg={'gray.50'} p={2} rounded={'md'} boxShadow={'lg'}>
      <Text fontWeight='bold' fontSize='sm'>
        {address.city}
      </Text>
      <Text fontSize='sm'>/</Text>
      <Text fontSize='sm'>{address.district}</Text>
      <Text fontSize='sm'>/</Text>
      <Text fontSize='sm'>{address.street}</Text>
    </HStack>
  );
};
