import React from 'react';

export interface MenuLink {
  to: string;
  label: string;
  special?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ElementType;
}
