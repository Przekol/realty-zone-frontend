import { Box, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { AccountSidebar } from '@templates/navigations/AccountSidebar';

export const MyAccount = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      <AccountSidebar isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        <Outlet />
      </Box>
    </Box>
  );
};
