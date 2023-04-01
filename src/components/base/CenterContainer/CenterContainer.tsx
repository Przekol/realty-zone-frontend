import { Container } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
  maxW?: string;
}

export const CenterContainer = ({ children, maxW = '2xl' }: Props) => (
  <Container maxW={maxW} my={'auto'}>
    {children}
  </Container>
);
