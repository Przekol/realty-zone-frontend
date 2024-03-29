import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { Logo } from '@ui/Logo';
import { FooterMenu } from '@ui/menu';
import { SocialButtons } from '@ui/SocialButtons';
import { footerLinks, socialLinks } from '@utils/data/links';

export const MainFooter = () => {
  return (
    <Box as={'footer'} bg={useColorModeValue('gray.100', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
        <Logo />
        <FooterMenu links={footerLinks} />
      </Container>

      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© {new Date().getFullYear()} RealtyZone. Wszelkie prawa zastrzeżone</Text>
          <SocialButtons links={socialLinks} />
        </Container>
      </Box>
    </Box>
  );
};
