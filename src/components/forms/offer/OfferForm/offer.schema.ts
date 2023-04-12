import * as yup from 'yup';

export const offerSchema = yup.object().shape({
  title: yup.string().min(10, 'Tytuł musi zawierać co najmniej 10 znaków').required('Tytuł jest wymagany'),
  description: yup.string().min(10, 'Opis musi zawierać co najmniej 10 znaków').required('Opis jest wymagany'),
  price: yup.number().min(1, 'Cena musi być większa niż 0').required('Cena jest wymagana'),
  area: yup.number().min(1, 'Powierzchnia musi być większa niż 0').required('Powierzchnia jest wymagana'),
  rooms: yup.number().min(1, 'Liczba pokoi musi być większa niż 0').required('Liczba pokoi jest wymagana'),
  floor: yup.number().min(0, 'Piętro musi być większe lub równe 0').required('Piętro jest wymagane'),
  buildingFloors: yup
    .number()
    .min(1, 'Liczba pięter w budynku musi być większa niż 0')
    .required('Liczba pięter w budynku jest wymagana'),
  constructionYear: yup
    .number()
    .min(1800, 'Rok budowy musi być większy niż 1800')
    .max(new Date().getFullYear(), 'Rok budowy nie może być w przyszłości')
    .required('Rok budowy jest wymagany'),
  dictionaries: yup.object().shape({
    market: yup.number().required('Rynek jest wymagany'),
    transaction: yup.number().required('Rodzaj transakcji jest wymagany'),
    ownership: yup.number().required('Forma własności jest wymagana'),

    type: yup.number().required('Typ nieruchomości jest wymagany'),
  }),
  address: yup.object().shape({
    street: yup.string().min(3, 'Ulica musi zawierać co najmniej 3 znaki').required('Ulica jest wymagana'),
    streetNumber: yup
      .string()
      .min(1, 'Numer ulicy musi zawierać co najmniej 1 znak')
      .required('Numer ulicy jest wymagany'),
    flatNumber: yup
      .string()
      .min(1, 'Numer mieszkania musi zawierać co najmniej 1 znak')
      .required('Numer mieszkania jest wymagany'),
    zipCode: yup
      .string()
      .min(5, 'Kod pocztowy musi zawierać co najmniej 5 znaków')
      .required('Kod pocztowy jest wymagany'),
    city: yup.string().min(3, 'Miasto musi zawierać co najmniej 3 znaki').required('Miasto jest wymagane'),
    district: yup.string().min(3, 'Dzielnica musi zawierać co najmniej 3 znaki').required('Dzielnica jest wymagana'),
    country: yup.string().min(3, 'Kraj musi zawierać co najmniej 3 znaki').required('Kraj jest wymagany'),
  }),
});
