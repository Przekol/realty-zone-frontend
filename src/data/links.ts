import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { FormLink, MenuLink, SocialLink } from '@frontendTypes';

import { ROUTES } from './routes';

export const navigationLinks: MenuLink[] = [
  { to: '/announcements', label: 'Ogłoszenia' },
  { to: '/my-account', label: 'Moje Konto' },
  { to: '/add-announcement', label: 'Dodaj ogłoszenie', special: true },
];

export const footerLinks: MenuLink[] = [
  { to: '/', label: 'Strona startowa' },
  { to: '/about', label: 'O nas' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Kontakt' },
];

export const socialLinks: SocialLink[] = [
  { label: 'Twitter', to: '#', icon: FaTwitter },
  { label: 'YouTube', to: '#', icon: FaYoutube },
  { label: 'Instagram', to: '#', icon: FaInstagram },
];

const formLinks: { [key: string]: FormLink } = {
  signUp: { to: ROUTES.signUp, label: 'Zarejestruj się', text: 'Nie masz jeszcze konta?' },
  signIn: {
    to: ROUTES.signIn,
    label: 'Zaloguj się',
    text: 'Masz już konto?',
  },
  forgetPassword: {
    to: ROUTES.forgetPassword,
    label: 'Przypomnij hasło',
    text: 'Zapomniałeś hasła?',
  },
};
export const signUpLinks = [formLinks.signIn];

export const signInLinks = [formLinks.signUp, formLinks.forgetPassword];

export const forgetPasswordLinks = [formLinks.signUp];
