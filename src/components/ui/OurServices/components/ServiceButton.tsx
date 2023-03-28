import { Button } from '@chakra-ui/react';
import React from 'react';

interface Props {
  buttonText: string;
}

export const ServiceButton = ({ buttonText }: Props) => (
  <Button mt={4} colorScheme='blue' alignSelf='center'>
    {buttonText}
  </Button>
);
