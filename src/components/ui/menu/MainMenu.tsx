import { Flex, HStack } from '@chakra-ui/react';
import React from 'react';

import { NavigationLinks } from '@ui/NavigationLinks';
import { TopBarUserMenu } from '@ui/TopBarUserMenu/TopBarUserMenu';

import { MenuLink, UserDetails } from '@frontendTypes';

interface Props {
  links: MenuLink[];
  isLogged: boolean;
}
const topBarUserMenuData: UserDetails = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  role: 'Admin',
  src: 'https://bit.ly/sage-adebayo',
};
export const MainMenu = ({ links, isLogged }: Props) => (
  <HStack as={'nav'} spacing={8} alignItems={'center'}>
    <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
      <NavigationLinks links={links} />
    </HStack>
    <Flex alignItems={'center'}>
      <NavigationLinks links={links} isSpecial={true} />
    </Flex>
    {isLogged && <TopBarUserMenu userDetails={topBarUserMenuData} />}
  </HStack>
);
