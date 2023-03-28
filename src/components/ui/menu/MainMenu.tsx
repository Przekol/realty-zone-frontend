import { Flex, HStack } from '@chakra-ui/react';
import React from 'react';

import { NavigationLinks } from '@ui/NavigationLinks';

import { MenuLink } from '@frontendTypes';
interface Props {
  links: MenuLink[];
}
export const MainMenu = ({ links }: Props) => (
  <HStack as={'nav'} spacing={8} alignItems={'center'}>
    <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
      <NavigationLinks links={links} />
    </HStack>
    <Flex alignItems={'center'}>
      <NavigationLinks links={links} isSpecial={true} />
    </Flex>
  </HStack>
);
