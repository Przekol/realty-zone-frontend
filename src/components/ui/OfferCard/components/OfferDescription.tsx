import { Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
  description: string;
  maxLength?: number;
}
export const OfferDescription = ({ title, description, maxLength }: Props) => {
  const truncateText = (text: string, maxLength?: number) => {
    if (!maxLength) {
      return text;
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };
  return (
    <Stack spacing={2}>
      <Heading>{title}</Heading>
      <Text color={'gray.500'} fontSize={'lg'}>
        {truncateText(description, maxLength)}
      </Text>
    </Stack>
  );
};
