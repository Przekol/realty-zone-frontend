import { MenuDivider, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { CustomLink } from '@base/CustomLink';

import { UserMenuItemLink } from '@frontendTypes';

interface Props {
  menuItems: UserMenuItemLink[];
}

export const UserMenuList = ({ menuItems }: Props) => {
  return (
    <MenuList bg={useColorModeValue('white', 'gray.900')} borderColor={useColorModeValue('gray.200', 'gray.700')}>
      {menuItems.map((item, index) => {
        if (item.isDivider) {
          return <MenuDivider key={`divider-${index}`} />;
        }
        if (item.isCustomLink && item.to) {
          return (
            <CustomLink to={item.to} key={`menu-item-${index}`}>
              <MenuItem>{item.label}</MenuItem>
            </CustomLink>
          );
        }
      })}
    </MenuList>
  );
};
