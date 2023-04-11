import { AspectRatio, Box } from '@chakra-ui/react';
import React from 'react';

interface Props {
  url: string;
}
export const PhotoSlide = ({ url }: Props) => {
  return (
    <AspectRatio ratio={16 / 9}>
      <Box
        height={'6xl'}
        position='relative'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundImage={`url(${url})`}
      />
    </AspectRatio>
  );
};
