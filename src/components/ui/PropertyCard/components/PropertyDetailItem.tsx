import { Flex, Stack, Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

interface Props {
  label: string;
  value: string | number;
  icon: ReactElement;
}
export const PropertyDetailItem = ({ label, value, icon }: Props) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={4} h={4} align={'center'} justify={'center'} rounded={'full'}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{`${label}: ${value}`}</Text>
    </Stack>
  );
};
