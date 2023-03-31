import { Flex } from '@chakra-ui/react';
import React from 'react';

import { MainFooter } from '@templates/footers';
import { MainNavigation } from '@templates/navigations';

interface Props {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: Props) => (
  <Flex direction='column' minHeight='100vh'>
    <MainNavigation />
    {children}
    <MainFooter />
  </Flex>
);
