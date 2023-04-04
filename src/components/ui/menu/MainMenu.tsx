import { Flex, HStack } from '@chakra-ui/react';
import React from 'react';

import { NavigationLinks } from '@ui/NavigationLinks';
import { TopBarUserMenu } from '@ui/TopBarUserMenu';

import { MenuLink } from '@frontendTypes';

interface Props {
  links: MenuLink[];
  isLogged: boolean;
}

export const MainMenu = ({ links, isLogged }: Props) => {
  return (
    <HStack as={'nav'} spacing={8} alignItems={'center'}>
      <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
        <NavigationLinks links={links} />
      </HStack>
      <Flex alignItems={'center'}>
        <NavigationLinks links={links} isSpecial={true} />
      </Flex>
      {isLogged && <TopBarUserMenu />}
    </HStack>
  );
};
