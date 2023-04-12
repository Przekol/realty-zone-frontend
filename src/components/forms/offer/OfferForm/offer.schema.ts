import * as yup from 'yup';

export const offerSchema = yup.object().shape({
  title: yup.string().required('Tytuł jest wymagany'),
  description: yup.string().required('Opis jest wymagany'),
  price: yup.number().required('Cena jest wymagana'),
  area: yup.number().required('Powierzchnia jest wymagana'),
  rooms: yup.number().required('Liczba pokoi jest wymagana'),
  floor: yup.number().required('Piętro jest wymagane'),
  buildingFloors: yup.number().required('Liczba pięter w budynku jest wymagana'),
  constructionYear: yup.number().required('Rok budowy jest wymagany'),
  dictionaries: yup.object().shape({
    market: yup.number().required('Rynek jest wymagany'),
    transaction: yup.number().required('Rodzaj transakcji jest wymagany'),
    ownership: yup.number().required('Forma własności jest wymagana'),

    type: yup.number().required('Typ nieruchomości jest wymagany'),
  }),
  address: yup.object().shape({
    street: yup.string().required('Ulica jest wymagana'),
    streetNumber: yup.string().required('Numer ulicy jest wymagany'),
    flatNumber: yup.string().required('Numer mieszkania jest wymagany'),
    zipCode: yup.string().required('Kod pocztowy jest wymagany'),
    city: yup.string().required('Miasto jest wymagane'),
    district: yup.string().required('Dzielnica jest wymagana'),
    country: yup.string().required('Kraj jest wymagany'),
  }),
});
