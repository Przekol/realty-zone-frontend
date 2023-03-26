import { Service } from '@frontendTypes';

import { RealEstatePurchase, RealEstateRental, RealEstateSales } from '../assets/our-services';

export const services: Service[] = [
  {
    title: 'Sprzedaż nieruchomości',
    description: 'Pomagamy w sprzedaży nieruchomości, oferując profesjonalne doradztwo i wsparcie na każdym etapie.',
    buttonText: 'Zobacz więcej',
    imageSrc: RealEstateSales,
  },
  {
    title: 'Zakup nieruchomości',
    description: 'Z nami znajdziesz wymarzoną nieruchomość, dopasowaną do Twoich potrzeb i oczekiwań.',
    buttonText: 'Zobacz więcej',
    imageSrc: RealEstatePurchase,
  },
  {
    title: 'Wynajem nieruchomości',
    description: 'Oferujemy szeroki wybór nieruchomości do wynajęcia oraz pomoc w znalezieniu odpowiedniego lokalu.',
    buttonText: 'Zobacz więcej',
    imageSrc: RealEstateRental,
  },
];
