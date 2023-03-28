import { Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { ServiceButton, ServiceContent, ServiceImage } from './components';

interface Props {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
}
export const OurServices = ({ title, description, buttonText, imageSrc }: Props) => {
  return (
    <Flex
      rounded={'lg'}
      boxShadow={'lg'}
      bg={useColorModeValue('gray.50', 'gray.700')}
      overflow='hidden'
      p={8}
      mb={4}
      direction='column'
    >
      <ServiceImage imageSrc={imageSrc} title={title} />
      <ServiceContent title={title} description={description} />
      <ServiceButton buttonText={buttonText} />
    </Flex>
  );
};
