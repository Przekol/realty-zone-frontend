import { Image } from '@chakra-ui/react';
import React from 'react';

interface Props {
  imageSrc: string;
  title: string;
}

export const ServiceImage = ({ imageSrc, title }: Props) => (
  <Image src={imageSrc} alt={title} alignSelf='center' width='100%' height='200px' objectFit='cover' mb={4} />
);
