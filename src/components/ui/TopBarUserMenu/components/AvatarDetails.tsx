import { Avatar } from '@chakra-ui/react';
import React from 'react';

import { DefaultAvatar } from '@assets';

interface Props {
  src?: string;
}

export const AvatarDetails = ({ src }: Props) => {
  return <Avatar size={'sm'} src={src || DefaultAvatar} />;
};
