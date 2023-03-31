import { CloseIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import React from 'react';

export const ErrorIcon = () => (
  <Flex flexDirection='column' justifyContent='center' alignItems='center'>
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      bg={'red.500'}
      rounded={'50px'}
      w={'55px'}
      h={'55px'}
      textAlign='center'
    >
      <CloseIcon boxSize={'20px'} color={'white'} />
    </Flex>
  </Flex>
);
