import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
  description: string;
}
export const SectionHeader = ({ title, description }: Props) => {
  return (
    <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
      <Heading fontSize={'3xl'}>{title}</Heading>
      <Text color={'gray.600'} fontSize={'xl'}>
        {description}
      </Text>
    </Stack>
  );
};
