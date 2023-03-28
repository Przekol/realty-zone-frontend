import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import { Logo } from '@ui/Logo';
import { MainMenu, MobileMenu } from '@ui/menu';
import { navigationLinks } from '@utils/data/links';

export const MainNavigation = () => {
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
          <MainMenu links={navigationLinks} />
        </Flex>

        {isOpen ? <MobileMenu links={navigationLinks} /> : null}
      </Box>
    </>
  );
};
