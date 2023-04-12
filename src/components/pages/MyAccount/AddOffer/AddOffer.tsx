import { DictionaryResponse } from '@backendTypes';
import { Heading } from '@chakra-ui/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { CenterContainer } from '@base/CenterContainer';
import { OfferForm, OfferPhotosForm } from '@forms/offer';

export const AddOffer = () => {
  const [offerNumber, setOfferNumber] = React.useState<number | null>(null);
  const dictionaries = useLoaderData() as DictionaryResponse;

  return (
    <CenterContainer maxW={'6xl'}>
      <Heading fontSize={'4xl'} textAlign={'center'} p={8}>
        Dodaj nową ofertę
      </Heading>
      {!offerNumber && <OfferForm dictionaries={dictionaries} setOfferNumber={setOfferNumber} />}
      {offerNumber && <OfferPhotosForm offerNumber={offerNumber} />}
    </CenterContainer>
  );
};
