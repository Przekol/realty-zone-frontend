import React from 'react';

import { IconLink } from '@frontendTypes';

import { SidebarNavigationItem } from './SidebarNavigationItem';

interface Props {
  links: IconLink[];
}
export const SidebarNavigationItems = ({ links }: Props) => {
  return (
    <>
      {links.map((link) => (
        <SidebarNavigationItem key={link.to} icon={link.icon} to={link.to}>
          {link.label}
        </SidebarNavigationItem>
      ))}
    </>
  );
};
