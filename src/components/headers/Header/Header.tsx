import { Flex } from '@chakra-ui/react';
import React from 'react';

import { OVERLAYS } from '@utils/data/overlays';

import { BackgroundOverlay } from '../../BackgroundOverlay';

interface Props {
  children: React.ReactNode;
  backgroundImage: string;
  height?: string | [string, string];
  overlay?: keyof typeof OVERLAYS;
}
export const Header = ({ children, backgroundImage, height = ['300px', '400px'], overlay = 'light' }: Props) => (
  <Flex
    as={'header'}
    w={'full'}
    h={height}
    backgroundImage={backgroundImage}
    backgroundSize={'cover'}
    backgroundPosition={'center center'}
    position='relative'
  >
    <BackgroundOverlay overlay={overlay} />
    {children}
  </Flex>
);
