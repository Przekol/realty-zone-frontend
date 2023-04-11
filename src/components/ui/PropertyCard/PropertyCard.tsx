import { OneOfferResponse } from '@backendTypes';
import { Button, Container, Flex, Heading, HStack, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { IoLayersSharp } from 'react-icons/all';
import { IoBedSharp, IoCalendar, IoHome } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import { PropertyDetails } from '@ui/PropertyCard/components/PropertyDetails';

interface Props {
  offer: OneOfferResponse;
}
export function PropertyCard({ offer }: Props) {
  const navigate = useNavigate();
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };
  const formatPrice = (price: number) => {
    return price.toLocaleString('pl-PL') + ' PLN';
  };
  const offerSlug = (title: string) => title.toLowerCase().split(' ').join('-');

  const handleOpenDetails = (offerNumber: number, title: string) => {
    navigate(`/offers/${offerNumber}/${offerSlug(title)}`);
  };
  const dataPropertiesCard = [
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
      value: offer.floor + '/' + offer.buildingFloors,
      icon: <IoLayersSharp />,
    },
    {
      label: 'Rok budowy',
      value: offer.constructionYear,
      icon: <IoCalendar />,
    },
  ];

  return (
    <Container maxW={'6xl'} py={6} boxShadow={'lg'} bg={'gray.100'} rounded={'lg'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <Stack spacing={4}>
          <HStack>
            <Text
              textTransform={'uppercase'}
              color={'green.50'}
              fontWeight={600}
              fontSize={'sm'}
              bg={'green.600'}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              {offer.transaction}
            </Text>
            <Text
              textTransform={'uppercase'}
              color={'red.50'}
              fontWeight={600}
              fontSize={'sm'}
              bg={'red.500'}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              {formatPrice(offer.price)}
            </Text>
          </HStack>

          <Heading>{offer.title}</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            {truncateText(offer.description, 100)}
          </Text>
          <PropertyDetails properties={dataPropertiesCard} />
          <Button
            onClick={() => handleOpenDetails(offer.offerNumber, offer.title)}
            size='lg'
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
          >
            Szczegóły
          </Button>
        </Stack>
        <Flex>
          <Image rounded={'md'} alt={'feature image'} src={offer.photos[0]} objectFit={'cover'} />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
