import { Heading, VStack, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
  description: string;
}

export const ServiceContent = ({ title, description }: Props) => (
  <VStack flexGrow={1} alignItems='center' justifyContent='center' spacing={4}>
    <Heading as='h3' size='md' textAlign='center'>
      {title}
    </Heading>
    <Text textAlign='center'>{description}</Text>
  </VStack>
);
