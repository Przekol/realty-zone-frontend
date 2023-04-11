import { Stack, StackDivider } from '@chakra-ui/react';
import React from 'react';

import { PropertyDetail } from '@frontendTypes';

import { PropertyDetailItem } from './PropertyDetailItem';

interface Props {
  properties: PropertyDetail[];
}
export const PropertyDetails = ({ properties }: Props) => {
  return (
    <Stack spacing={4} divider={<StackDivider borderColor={'gray.300'} />}>
      {properties.map((property, index) => (
        <PropertyDetailItem key={index} label={property.label} value={property.value} icon={property.icon} />
      ))}
    </Stack>
  );
};
