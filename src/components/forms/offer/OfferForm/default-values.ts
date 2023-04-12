import { OfferRequest } from '@backendTypes';

export const defaultValues: OfferRequest = {
  title: '',
  description: '',
  price: 0,
  area: 0,
  rooms: 0,
  floor: 0,
  buildingFloors: 0,
  constructionYear: 0,
  dictionaries: {
    market: 0,
    transaction: 0,
    ownership: 0,
    type: 0,
  },
  address: {
    city: '',
    street: '',
    district: '',
    streetNumber: '',
    country: '',
    flatNumber: '',
    zipCode: '',
  },
};
