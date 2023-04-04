import { Drawer, DrawerContent } from '@chakra-ui/react';
import React from 'react';

import { SidebarContent } from '@ui/SidebarContent';
import { sideBarLinks } from '@utils/data/links';

import { SidebarMobileNavigation } from './SidebarMobileNavigation';

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const AccountSidebar = ({ isOpen, onOpen, onClose }: Props) => {
  return (
    <>
      <SidebarContent links={sideBarLinks} onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent links={sideBarLinks} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <SidebarMobileNavigation onOpen={onOpen} />
    </>
  );
};
