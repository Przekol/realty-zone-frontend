import { Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

interface Props {
  text: string;
}
export const HeroText = ({ text }: Props) => (
  <Text color={'white'} fontWeight={700} lineHeight={1.2} fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
    {text}
  </Text>
);
