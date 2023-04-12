import * as yup from 'yup';

export const updateProfileSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Nazwa użytkownika musi zawierać co najmniej 3 znaki')
    .max(50, 'Nazwa użytkownika może mieć maksymalnie 50 znaków')
    .nullable(),
  firstName: yup
    .string()
    .min(3, 'Imię musi zawierać co najmniej 3 znaki')
    .max(50, 'Imię może mieć maksymalnie 50 znaków')
    .nullable(),
  lastName: yup
    .string()
    .min(3, 'Nazwisko musi zawierać co najmniej 3 znaki')
    .max(50, 'Nazwisko może mieć maksymalnie 50 znaków')
    .nullable(),
  phoneNumber: yup
    .string()
    .min(3, 'Numer telefonu musi zawierać co najmniej 3 znaki')
    .max(15, 'Numer telefonu może mieć maksymalnie 15 znaków')
    .nullable(),
});
