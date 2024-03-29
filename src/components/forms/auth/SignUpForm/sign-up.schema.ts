import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  email: yup.string().required('Email jest wymagany').email('Podaj prawidłowy adres e-mail'),
  password: yup.string().required('Hasło jest wymagane').min(8, 'Hasło musi mieć co najmniej 8 znaków'),
  repeatPassword: yup
    .string()
    .required('Powtórzenie hasła jest wymagane')
    .oneOf([yup.ref('password')], 'Hasła muszą się zgadzać'),
});
