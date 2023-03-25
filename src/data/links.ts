import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { MenuLink, SocialLink } from '@frontendTypes';

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
