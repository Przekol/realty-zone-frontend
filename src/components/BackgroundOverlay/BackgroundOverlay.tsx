import { Box } from '@chakra-ui/react';
import React from 'react';

import { OVERLAYS } from '../../data/overlays';

interface Props {
  overlay: keyof typeof OVERLAYS;
}

export const BackgroundOverlay = ({ overlay }: Props) => (
  <Box position='absolute' top={0} left={0} width='100%' height='100%' bg={OVERLAYS[overlay]} />
);
