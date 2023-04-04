import { AiOutlineHome, BsHouseAdd, CgProfile, FiSettings, MdOutlineRealEstateAgent } from 'react-icons/all';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { ROUTES } from '@routes/routes';

import { FormLink, IconLink, MenuLink, UserMenuItemLink } from '@frontendTypes';

interface NavigationLinks {
  commonLinks: MenuLink[];
  loggedOutLinks: MenuLink[];
  loggedInLinks: MenuLink[];
}
export const navigationLinks: NavigationLinks = {
  commonLinks: [{ to: ROUTES.offers, label: 'Ogłoszenia' }],
  loggedOutLinks: [{ to: ROUTES.auth.signIn, label: 'Zaloguj się', special: true }],
  loggedInLinks: [],
};

export const footerLinks: MenuLink[] = [
  { to: ROUTES.home, label: 'Strona startowa' },
  { to: ROUTES.about, label: 'O nas' },
  { to: ROUTES.blog, label: 'Blog' },
  { to: ROUTES.contact, label: 'Kontakt' },
];

export const socialLinks: IconLink[] = [
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

export const sideBarLinks: IconLink[] = [
  { to: ROUTES.myAccount.base, label: 'Profil', icon: CgProfile },
  {
    to: ROUTES.myAccount.addOffer,
    label: 'Dodaj ogłoszenie',
    icon: BsHouseAdd,
  },
  {
    to: ROUTES.myAccount.myOffers,
    label: 'Moje ogłoszenia',
    icon: MdOutlineRealEstateAgent,
  },
  {
    to: ROUTES.myAccount.settings,
    label: 'Ustawienia',
    icon: FiSettings,
  },
  { to: ROUTES.home, label: 'Powrót do strony głównej', icon: AiOutlineHome },
];

export const userMenuItemLinks: UserMenuItemLink[] = [
  { label: 'Moje konto', to: ROUTES.myAccount.base, isCustomLink: true },
  { label: 'Dodaj ofertę', to: ROUTES.myAccount.addOffer, isCustomLink: true },
  { label: 'Ustawienia', to: ROUTES.myAccount.settings, isCustomLink: true },
  { isDivider: true },
  { label: 'Wyloguj', to: ROUTES.auth.logout, isCustomLink: true },
];
