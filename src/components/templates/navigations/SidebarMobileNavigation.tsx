import { Box, Flex, FlexProps, IconButton, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FiMenu } from 'react-icons/fi';

import { Logo } from '@ui/Logo';
import { TopBarUserMenu } from '@ui/TopBarUserMenu/TopBarUserMenu';

// import { useUserDetails } from '@utils/hooks';
import { UserDetails } from '@frontendTypes';

interface Props extends FlexProps {
  onOpen: () => void;
  userDetails?: UserDetails;
}

export const SidebarMobileNavigation = ({ onOpen, userDetails, ...rest }: Props) => {
  // const context = useUserDetails();
  // const user = context.user;
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Box display={{ base: 'flex', md: 'none' }}>
        <Logo />
      </Box>

      <TopBarUserMenu userDetails={userDetails} />
    </Flex>
  );
};
