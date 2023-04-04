import { Box, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { AccountSidebar } from '@templates/navigations/AccountSidebar';

import { UserDetails } from '@frontendTypes';

const topBarUserMenuData: UserDetails = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  role: 'Admin',
  src: 'https://bit.ly/sage-adebayo',
};

export const MyAccount = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      <AccountSidebar userDetails={topBarUserMenuData} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        <Outlet />
      </Box>
    </Box>
  );
};
