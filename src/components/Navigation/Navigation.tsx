import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import { NavigationLinks } from './NavigationLinks';
import { NavigationMobile } from './NavigationMobile';

import { navigationLinks } from '../../data/links';
import { Logo } from '../Logo';

export const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Logo />
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <NavigationLinks links={navigationLinks} />
            </HStack>
            <Flex alignItems={'center'}>
              <NavigationLinks links={navigationLinks} isSpecial={true} />
            </Flex>
          </HStack>
        </Flex>

        {isOpen ? <NavigationMobile links={navigationLinks} /> : null}
      </Box>
    </>
  );
};
