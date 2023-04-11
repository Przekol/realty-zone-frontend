import { DictionaryResponse, OfferRequest } from '@backendTypes';
import { ChakraProps, Grid, Stack, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { ReactNode } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { Form, useSubmit } from 'react-router-dom';

import { defaultValues } from '@forms/offer/OfferForm/default-values';
import { offerSchema } from '@forms/offer/OfferForm/offer.schema';
import { addOfferApi } from '@services/api/methods/offer/add-offer.api';
import { FormButton } from '@ui/auths';
import { FormField } from '@ui/FormField';
import { SelectField } from '@ui/SelectField';

interface OfferFormContainerProps extends ChakraProps {
  children: ReactNode;
}

export const OfferFormContainer = ({ children, ...rest }: OfferFormContainerProps) => (
  <Stack spacing={4} shadow={'xl'} p={4} rounded={'lg'} bg={'gray.50'} {...rest}>
    {children}
  </Stack>
);
interface Props {
  dictionaries: DictionaryResponse;
}
export const OfferForm = ({ dictionaries }: Props) => {
  const [offerNumber, setOfferNumber] = React.useState<number | null>(null);
  const submit = useSubmit();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OfferRequest>({
    resolver: yupResolver(offerSchema),
    defaultValues,
  });

  // const { onSubmit } = useFormSubmit<OfferRequest>({ reset, method: 'post' });
  const onSubmit = async (data: OfferRequest) => {
    const response = await addOfferApi(data);
    if (response.ok) {
      const data = response.data;
      if (data) {
        setOfferNumber(data.id);
        reset();
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={4}>
        <OfferFormContainer gridColumn={{ base: 'auto', lg: 'span 2' }}>
          <Text fontWeight='bold' fontSize='md'>
            Dane podstawowe:
          </Text>
          <FormField id={'title'} label={'Tytuł'} register={register('title')} errors={errors.title} />
          <FormField
            id={'description'}
            label={'Opis'}
            textarea={true}
            register={register('description')}
            errors={errors.description}
          />
        </OfferFormContainer>
        <OfferFormContainer>
          <Text fontWeight='bold' fontSize='md'>
            Parametry:
          </Text>
          <FormField id={'price'} label={'Cena'} register={register('price')} errors={errors.price} type={'number'} />
          <FormField
            id={'area'}
            label={'Powierzchnia'}
            register={register('area')}
            errors={errors.area}
            type={'number'}
          />
          <FormField
            id={'rooms'}
            label={'Liczba pokoi'}
            register={register('rooms')}
            errors={errors.rooms}
            type={'number'}
          />
          <FormField id={'floor'} label={'Piętro'} register={register('floor')} errors={errors.floor} type={'number'} />
          <FormField
            id={'buildingFloors'}
            label={'Liczba pięter'}
            register={register('buildingFloors')}
            errors={errors.buildingFloors}
            type={'number'}
          />
          <FormField
            id={'constructionYear'}
            label={'Rok budowy'}
            register={register('constructionYear')}
            errors={errors.constructionYear}
            type={'number'}
          />
          <SelectField
            id='dictionaries.market'
            label='Rynek'
            register={register('dictionaries.market')}
            options={dictionaries.market}
            defaultValue={defaultValues.dictionaries.market}
            errors={errors.dictionaries?.market}
          />
          <SelectField
            id='dictionaries.type'
            label='Typ nieruchomości'
            register={register('dictionaries.type')}
            options={dictionaries.type}
            defaultValue={defaultValues.dictionaries.type}
            errors={errors.dictionaries?.type as FieldError}
          />
          <SelectField
            id='dictionaries.ownership'
            label='Forma własności'
            register={register('dictionaries.ownership')}
            options={dictionaries.ownership}
            defaultValue={defaultValues.dictionaries.ownership}
            errors={errors.dictionaries?.ownership}
          />
          <SelectField
            id='dictionaries.transaction'
            label='Rodzaj transakcji'
            register={register('dictionaries.transaction')}
            options={dictionaries.transaction}
            defaultValue={defaultValues.dictionaries.transaction}
            errors={errors.dictionaries?.transaction}
          />
        </OfferFormContainer>
        <OfferFormContainer>
          <Text fontWeight='bold' fontSize='md'>
            Adres:
          </Text>
          <FormField
            id='address.street'
            label='Ulica'
            register={register('address.street')}
            errors={errors.address?.street}
          />
          <FormField
            id='address.streetNumber'
            label='Numer ulicy'
            register={register('address.streetNumber')}
            errors={errors.address?.streetNumber}
          />
          <FormField
            id='address.flatNumber'
            label='Numer mieszkania'
            register={register('address.flatNumber')}
            errors={errors.address?.flatNumber}
          />
          <FormField
            id='address.district'
            label='Dzielnica'
            register={register('address.district')}
            errors={errors.address?.district}
          />
          <FormField
            id='address.city'
            label='Miasto'
            register={register('address.city')}
            errors={errors.address?.city}
          />
          <FormField
            id='address.zipCode'
            label='Kod pocztowy'
            register={register('address.zipCode')}
            errors={errors.address?.zipCode}
          />
          <FormField
            id='address.country'
            label='Kraj'
            register={register('address.country')}
            errors={errors.address?.country}
          />
        </OfferFormContainer>
      </Grid>
      <FormButton>Prześlij</FormButton>
    </Form>
  );
};
