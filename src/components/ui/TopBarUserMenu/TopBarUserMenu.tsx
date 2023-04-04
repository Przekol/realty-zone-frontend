import { Flex, HStack, Menu } from '@chakra-ui/react';
import React from 'react';

import { userMenuItemLinks } from '@utils/data/links';

import { UserDetails } from '@frontendTypes';

import { MenuButtonAvatar, UserMenuList } from './components';

interface Props {
  userDetails?: UserDetails;
}

export const TopBarUserMenu = ({ userDetails }: Props) => {
  return (
    <HStack spacing={{ base: '0', md: '6' }}>
      <Flex alignItems={'center'}>
        <Menu>
          <MenuButtonAvatar details={userDetails} />
          <UserMenuList menuItems={userMenuItemLinks} />
        </Menu>
      </Flex>
    </HStack>
  );
};
