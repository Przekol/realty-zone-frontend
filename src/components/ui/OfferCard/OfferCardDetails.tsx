import { OneOfferResponse } from '@backendTypes';
import { Container, Stack } from '@chakra-ui/react';
import React from 'react';
import { IoLayersSharp } from 'react-icons/all';
import {
  IoBedSharp,
  IoBriefcase,
  IoBusiness,
  IoCalendar,
  IoHome,
  IoStorefront,
  IoSwapHorizontal,
} from 'react-icons/io5';

import {
  OfferAddress,
  OfferAttributes,
  OfferContainer,
  OfferDescription,
  OfferHeader,
  OfferOwnerDetails,
} from '@ui/OfferCard/components';
import { OfferGallery } from '@ui/OfferGallery';

interface Props {
  offer: OneOfferResponse;
}
export const OfferCardDetails = ({ offer }: Props) => {
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
    {
      label: 'Rynek',
      value: offer.market,
      icon: <IoStorefront />,
    },
    {
      label: 'Rodzaj transakcji',
      value: offer.transaction,
      icon: <IoSwapHorizontal />,
    },
    {
      label: 'Forma własności',
      value: offer.ownership,
      icon: <IoBriefcase />,
    },
    {
      label: 'Typ nieruchomości',
      value: offer.type,
      icon: <IoBusiness />,
    },
  ];
  return (
    <Container maxW='6xl' py={6}>
      <OfferContainer>
        <Stack spacing={4}>
          <OfferAddress address={offer.address} />
          <OfferHeader transaction={offer.transaction} price={offer.price} />
          <OfferDescription description={offer.description} title={offer.title} />
          <OfferAttributes attributes={attributesDetails} />
        </Stack>
        <OfferGallery photos={offer.photos} />
        <OfferOwnerDetails owner={offer.user} />
      </OfferContainer>
    </Container>
  );
};
