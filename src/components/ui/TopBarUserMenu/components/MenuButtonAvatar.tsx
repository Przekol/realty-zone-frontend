import { UserDetailsResponse } from '@backendTypes';
import { Box, HStack, MenuButton, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { AvatarDetails } from './AvatarDetails';

interface Props {
  details: UserDetailsResponse | null;
}

export const MenuButtonAvatar = ({ details }: Props) => {
  const getUserNameOrEmail = () => {
    if (!details) return null;
    if (details.firstName && details.lastName) {
      return `${details.firstName} ${details.lastName}`;
    } else if (details.firstName) {
      return details.firstName;
    }
    return details.email;
  };
  const lastRole = details && details.roles.length > 0 ? details.roles[details.roles.length - 1] : '';

  return (
    <MenuButton py={2} transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
      <HStack>
        <AvatarDetails src={details?.src} />
        <VStack display={{ base: 'none', md: 'flex' }} alignItems='flex-start' spacing='1px' ml='2'>
          <Text fontSize='sm'>{getUserNameOrEmail()}</Text>
          <Text fontSize='xs' color='gray.600'>
            {lastRole}
          </Text>
        </VStack>
        <Box display={{ base: 'none', md: 'flex' }}>
          <FiChevronDown />
        </Box>
      </HStack>
    </MenuButton>
  );
};
