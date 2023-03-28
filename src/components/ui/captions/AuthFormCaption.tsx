import { Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
  description: string;
}
export const AuthFormCaption = ({ title, description }: Props) => {
  return (
    <Stack align={'center'}>
      <Heading fontSize={'4xl'} textAlign={'center'}>
        {title}
      </Heading>
      <Text fontSize={'lg'} textAlign={'center'} color={useColorModeValue('gray.800', 'gray.400')}>
        {description}
      </Text>
    </Stack>
  );
};
