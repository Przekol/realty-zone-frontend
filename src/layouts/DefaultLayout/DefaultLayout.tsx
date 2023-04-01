import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { MainFooter } from '@templates/footers';
import { MainNavigation } from '@templates/navigations';

export const DefaultLayout = () => {
  return (
    <Flex direction='column' minHeight='100vh'>
      <MainNavigation />
      <Outlet />
      <MainFooter />
    </Flex>
  );
};
