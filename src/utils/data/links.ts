import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { ROUTES } from '@routes/routes';

import { FormLink, MenuLink, SocialLink } from '@frontendTypes';

export const navigationLinks: MenuLink[] = [
  { to: ROUTES.offers, label: 'Ogłoszenia' },
  { to: ROUTES.myAccount.base, label: 'Moje Konto' },
  { to: ROUTES.myAccount.addOffer, label: 'Dodaj ogłoszenie', special: true },
];

export const footerLinks: MenuLink[] = [
  { to: ROUTES.home, label: 'Strona startowa' },
  { to: ROUTES.about, label: 'O nas' },
  { to: ROUTES.blog, label: 'Blog' },
  { to: ROUTES.contact, label: 'Kontakt' },
];

export const socialLinks: SocialLink[] = [
  { label: 'Twitter', to: ROUTES.socialMedia.Twitter, icon: FaTwitter },
  { label: 'YouTube', to: ROUTES.socialMedia.YouTube, icon: FaYoutube },
  { label: 'Instagram', to: ROUTES.socialMedia.Instagram, icon: FaInstagram },
];

const formLinks: { [key: string]: FormLink } = {
  signUp: { to: ROUTES.auth.signUp, label: 'Zarejestruj się', text: 'Nie masz jeszcze konta?' },
  signIn: {
    to: ROUTES.auth.signIn,
    label: 'Zaloguj się',
    text: 'Masz już konto?',
  },
  forgetPassword: {
    to: ROUTES.auth.forgetPassword,
    label: 'Przypomnij hasło',
    text: 'Zapomniałeś hasła?',
  },
};
export const signUpLinks = [formLinks.signIn];

export const signInLinks = [formLinks.signUp, formLinks.forgetPassword];

export const forgetPasswordLinks = [formLinks.signUp];
