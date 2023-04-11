import { DictionaryResponse } from '@backendTypes';
import { Heading } from '@chakra-ui/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { CenterContainer } from '@base/CenterContainer';
import { OfferForm } from '@forms/offer';

export const AddOffer = () => {
  const dictionaries = useLoaderData() as DictionaryResponse;

  return (
    <CenterContainer maxW={'6xl'}>
      <Heading fontSize={'4xl'} textAlign={'center'} p={8}>
        Dodaj nową ofertę
      </Heading>
      <OfferForm dictionaries={dictionaries} />
    </CenterContainer>
  );
};
