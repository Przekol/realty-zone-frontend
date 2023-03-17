import { AddIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, HStack, IconButton, Link, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

const Links = [
  { to: '/announcements', label: 'Ogłoszenia' },
  { to: '/my-account', label: 'Moje Konto' },
  { to: '/add-announcement', label: 'Dodaj ogłoszenie', special: true },
];

const NavLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={to}
  >
    {children}
  </Link>
);
export const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>Logo</Box>
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.filter((link) => !link.special).map((link) => (
                <NavLink key={link.to} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
            <Flex alignItems={'center'}>
              {Links.filter((link) => link.special).map((link) => (
                <NavLink key={link.to} to={link.to}>
                  <Button variant={'solid'} colorScheme={'teal'} size={'sm'} mr={4} leftIcon={<AddIcon />}>
                    {link.label}
                  </Button>
                </NavLink>
              ))}
            </Flex>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.filter((link) => !link.special).map((link) => (
                <NavLink key={link.to} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
