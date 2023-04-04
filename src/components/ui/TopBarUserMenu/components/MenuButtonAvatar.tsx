import { Box, HStack, MenuButton, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { UserDetails } from '@frontendTypes';

import { AvatarDetails } from './AvatarDetails';

interface Props {
  details?: UserDetails;
}

export const MenuButtonAvatar = ({ details }: Props) => {
  const getDisplayName = () => {
    if (!details) return null;
    if (details.firstName && details.lastName) {
      return `${details.firstName} ${details.lastName}`;
    } else if (details.firstName) {
      return details.firstName;
    }
    return details.email;
  };

  return (
    <MenuButton py={2} transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
      <HStack>
        <AvatarDetails src={details && details.src} />
        <VStack display={{ base: 'none', md: 'flex' }} alignItems='flex-start' spacing='1px' ml='2'>
          <Text fontSize='sm'>{getDisplayName()}</Text>
          <Text fontSize='xs' color='gray.600'>
            {details && details.role}
          </Text>
        </VStack>
        <Box display={{ base: 'none', md: 'flex' }}>
          <FiChevronDown />
        </Box>
      </HStack>
    </MenuButton>
  );
};
