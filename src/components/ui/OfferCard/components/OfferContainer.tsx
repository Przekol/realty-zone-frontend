import { Container } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
export const OfferContainer = ({ children }: Props) => (
  <Container maxW={'6xl'} py={6} boxShadow={'lg'} bg={'gray.100'} rounded={'lg'}>
    {children}
  </Container>
);
