import { HStack, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  transaction: string;
  price: number;
}
export const OfferHeader = ({ transaction, price }: Props) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pl-PL') + ' PLN';
  };
  return (
    <HStack>
      <Text
        textTransform={'uppercase'}
        color={'green.50'}
        fontWeight={600}
        fontSize={'sm'}
        bg={'green.600'}
        p={2}
        alignSelf={'flex-start'}
        rounded={'md'}
      >
        {transaction}
      </Text>
      <Text
        textTransform={'uppercase'}
        color={'red.50'}
        fontWeight={600}
        fontSize={'sm'}
        bg={'red.500'}
        p={2}
        alignSelf={'flex-start'}
        rounded={'md'}
      >
        {formatPrice(price)}
      </Text>
    </HStack>
  );
};
