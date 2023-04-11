import { OffersListResponse } from '@backendTypes';
import { Container, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { PropertyCard } from '@ui/PropertyCard';

export const Offers = () => {
  const offersList = useLoaderData() as OffersListResponse;

  return (
    <Container maxW='6xl' py={6}>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={5}>
        {offersList.offers.map((offer) => (
          <PropertyCard key={offer.offerNumber} offer={offer} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
