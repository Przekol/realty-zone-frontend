import { UserDetailsResponse } from '@backendTypes';
import { Flex, HStack, Menu } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { UserDetailsLoader } from '@services/loaders';
import { userMenuItemLinks } from '@utils/data/links';
import { useAuthenticationStatus } from '@utils/hooks';

import { MenuButtonAvatar, UserMenuList } from './components';

export const TopBarUserMenu = () => {
  const { isLogged } = useAuthenticationStatus();
  const [userDetails, setUserDetails] = useState<UserDetailsResponse>({
    email: '',
    firstName: '',
    lastName: '',
    src: '',
    status: 0,
    roles: ['User'],
  });
  useEffect(() => {
    if (isLogged) {
      loadUserDetails();
    }
  }, [isLogged]);

  const loadUserDetails = async () => {
    const data = await UserDetailsLoader();
    if (data) {
      setUserDetails((prevState) => ({ ...prevState, ...data }));
    }
  };

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
