import React from 'react';

export interface MenuLink {
  to: string;
  label: string;
  special?: boolean;
}

export interface SocialLink {
  to: string;
  label: string;
  icon: React.ElementType;
}

export interface FormLink {
  to: string;
  label: string;
  text: string;
}
