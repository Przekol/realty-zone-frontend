import { Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
  description: string;
}
export const FormHeading = ({ title, description }: Props) => {
  return (
    <Stack align={'center'}>
      <Heading fontSize={'4xl'} textAlign={'center'}>
        {title}
      </Heading>
      <Text fontSize={'lg'} color={'gray.600'}>
        {description}
      </Text>
    </Stack>
  );
};
