import { Heading, Text, Button, Image, Flex, VStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

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
      <Image src={imageSrc} alt={title} alignSelf='center' width='100%' height='200px' objectFit='cover' mb={4} />
      <VStack flexGrow={1} alignItems='center' justifyContent='center' spacing={4}>
        <Heading as='h3' size='md' textAlign='center'>
          {title}
        </Heading>
        <Text textAlign='center'>{description}</Text>
      </VStack>
      <Button mt={4} colorScheme='blue' alignSelf='center'>
        {buttonText}
      </Button>
    </Flex>
  );
};
