import { IconType } from 'react-icons';

export interface MenuLink {
  to: string;
  label: string;
  special?: boolean;
}

export interface IconLink {
  to: string;
  label: string;
  icon: IconType;
}

export interface FormLink {
  to: string;
  label: string;
  text: string;
}

export interface UserMenuItemLink {
  label: string;
  to: string;
}
