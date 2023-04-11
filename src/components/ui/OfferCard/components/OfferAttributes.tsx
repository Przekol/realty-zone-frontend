import { SimpleGrid, Stack, StackDivider } from '@chakra-ui/react';
import React from 'react';

import { Attributes } from '@frontendTypes';

import { OfferAttribute } from './OfferAttribute';

interface Props {
  attributes: Attributes[];
}
export const OfferAttributes = ({ attributes }: Props) => {
  return (
    <Stack spacing={4} divider={<StackDivider borderColor={'gray.300'} />}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        {attributes.map((property, index) => (
          <OfferAttribute key={index} label={property.label} value={property.value} icon={property.icon} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
