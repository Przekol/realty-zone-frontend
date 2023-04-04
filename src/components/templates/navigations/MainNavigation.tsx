import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { Logo } from '@ui/Logo';
import { MainMenu, MobileMenu } from '@ui/menu';
import { navigationLinks } from '@utils/data/links';
import { useLogged } from '@utils/hooks';

import { MenuLink } from '@frontendTypes';

export const MainNavigation = () => {
  const { isLogged } = useLogged();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [links, setLinks] = useState<MenuLink[]>([...navigationLinks.commonLinks, ...navigationLinks.loggedOutLinks]);
  const getNavigationLinks = (isLogged: boolean) => {
    return isLogged
      ? [...navigationLinks.commonLinks, ...navigationLinks.loggedInLinks]
      : [...navigationLinks.commonLinks, ...navigationLinks.loggedOutLinks];
  };

  useEffect(() => {
    setLinks(getNavigationLinks(isLogged));
  }, [isLogged]);

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
          <Box display={{ base: 'flex' }}>
            <Logo />
          </Box>
          <MainMenu links={links} />
        </Flex>

        {isOpen ? <MobileMenu links={links} /> : null}
      </Box>
    </>
  );
};
