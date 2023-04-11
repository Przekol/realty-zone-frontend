import { OneOfferResponse } from '@backendTypes';
import { SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import { IoLayersSharp } from 'react-icons/all';
import { IoBedSharp, IoCalendar, IoHome } from 'react-icons/io5';

import {
  OfferAddress,
  OfferAttributes,
  OfferContainer,
  OfferDescription,
  OfferDetailsButton,
  OfferHeader,
  OfferImage,
} from './components';

interface Props {
  offer: OneOfferResponse;
}
export function OfferCard({ offer }: Props) {
  const attributesDetails = [
    {
      label: 'Powierzchnia',
      value: offer.area,
      icon: <IoHome />,
    },
    {
      label: 'Liczba pokoi',
      value: offer.rooms,
      icon: <IoBedSharp />,
    },
    {
      label: 'Piętro',
      value: `${offer.floor}/${offer.buildingFloors}`,
      icon: <IoLayersSharp />,
    },
    {
      label: 'Rok budowy',
      value: offer.constructionYear,
      icon: <IoCalendar />,
    },
  ];

  return (
    <OfferContainer>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <Stack spacing={4}>
          <OfferAddress address={offer.address} />
          <OfferHeader transaction={offer.transaction} price={offer.price} />
          <OfferDescription description={offer.description} title={offer.title} maxLength={100} />
          <OfferAttributes attributes={attributesDetails} />
          <OfferDetailsButton title={offer.title} offerNumber={offer.offerNumber} />
        </Stack>
        <OfferImage src={offer.photos[0]} />
      </SimpleGrid>
    </OfferContainer>
  );
}
