import { Box, BoxProps, CloseButton, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { Logo } from '@ui/Logo';

import { IconLink } from '@frontendTypes';

import { SidebarNavigationItems } from './components';

interface SidebarProps extends BoxProps {
  onClose: () => void;
  links: IconLink[];
}
export const SidebarContent = ({ onClose, links, ...rest }: SidebarProps) => {
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Logo />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <SidebarNavigationItems links={links} />
    </Box>
  );
};
