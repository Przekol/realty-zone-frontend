import { Container, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import { SectionCaption } from '@ui/captions';
import { OurServices } from '@ui/OurServices';

import { Service } from '@frontendTypes';

interface Props {
  services: Service[];
}
export const ServicesSection = ({ services }: Props) => {
  return (
    <Container as={'section'} maxW='container.xl' p={4}>
      <SectionCaption
        title='Nasze usługi'
        description='Jesteśmy profesjonalnym biurem nieruchomości, które oferuje kompleksowe usługi związane z obrotem nieruchomościami. Naszym klientom oferujemy fachową pomoc w zakupie, sprzedaży oraz wynajmie nieruchomości. Działamy na terenie całego kraju, dostarczając usługi najwyższej jakości, oparte na indywidualnym podejściu do potrzeb każdego klienta.'
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} p={4}>
        {services.map((service) => (
          <OurServices
            key={service.title}
            title={service.title}
            description={service.description}
            buttonText={service.buttonText}
            imageSrc={service.imageSrc}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};
