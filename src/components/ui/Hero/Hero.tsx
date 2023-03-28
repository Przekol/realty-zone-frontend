import { Stack, useBreakpointValue, VStack } from '@chakra-ui/react';
import React from 'react';

import { HeroButtons } from '@frontendTypes';

import { HeroButton, HeroText } from './components';

interface Props {
  text: string;
  buttons: HeroButtons[];
}
export const Hero = ({ text, buttons }: Props) => (
  <VStack w={'full'} justify={'center'} position='relative' px={useBreakpointValue({ base: 4, md: 8 })}>
    <Stack maxW={'2xl'} align={'flex-end'} spacing={6}>
      <HeroText text={text} />
      <Stack direction={'row'}>
        {buttons.map((button) => (
          <HeroButton
            key={button.to}
            label={button.label}
            to={button.to}
            colorScheme={button.colorScheme}
            hoverBg={button.hoverBg}
          />
        ))}
      </Stack>
    </Stack>
  </VStack>
);
