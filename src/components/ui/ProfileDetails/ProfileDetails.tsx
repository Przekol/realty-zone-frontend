import { UserProfileResponse } from '@backendTypes';
import { Avatar, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaPhoneAlt, FaRegEnvelope, FaRegUser } from 'react-icons/all';

import { DefaultAvatar } from '@assets';

interface Props {
  details: UserProfileResponse | null;
}

export const ProfileDetails = ({ details }: Props) => {
  const getUserNameOrEmail = () => {
    if (!details) return null;
    if (details.firstName && details.lastName) {
      return `${details.firstName} ${details.lastName}`;
    } else if (details.firstName) {
      return details.firstName;
    }
    return details.email;
  };
  const renderDetail = (icon: JSX.Element, text: string | undefined) => {
    return (
      <HStack spacing={1} justifyContent={'center'}>
        {icon}{' '}
        <Text textAlign={'center'} color={'gray.700'} px={3}>
          {text || 'Brak danych!'}
        </Text>
      </HStack>
    );
  };
  return (
    <>
      <Avatar size={'xl'} src={details?.avatar || DefaultAvatar} mb={4} pos={'relative'} />
      <Heading fontSize={'2xl'} fontFamily={'body'}>
        {getUserNameOrEmail()}
      </Heading>
      <Text fontWeight={600} color={'gray.500'}>
        @{details?.username || 'nieznajomy'}
      </Text>
      <HStack spacing={1} justifyContent={'center'} mb={4}>
        <FaRegUser />{' '}
        <Text textAlign={'center'} color={'gray.700'} px={3}>
          {details?.role}
        </Text>
      </HStack>
      {renderDetail(<FaRegEnvelope />, details?.email)}
      {renderDetail(<FaPhoneAlt />, details?.phoneNumber)}
    </>
  );
};
