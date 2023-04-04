import { Button } from '@chakra-ui/react';
import * as React from 'react';
import { MdOutlineLogin } from 'react-icons/all';

import { MenuLink } from '@frontendTypes';

import { NavigationLink } from './components';

interface Props {
  links: MenuLink[];
  isSpecial?: boolean;
}
export const NavigationLinks = ({ links, isSpecial }: Props) => (
  <>
    {links
      .filter((link) => (isSpecial ? link.special : !link.special))
      .map((link) => (
        <NavigationLink key={link.to} to={link.to}>
          {isSpecial ? (
            <Button
              variant={'solid'}
              rounded={'full'}
              colorScheme={'blue'}
              size={'sm'}
              mr={4}
              rightIcon={<MdOutlineLogin />}
            >
              {link.label}
            </Button>
          ) : (
            link.label
          )}
        </NavigationLink>
      ))}
  </>
);
