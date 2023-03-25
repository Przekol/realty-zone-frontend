import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import * as React from 'react';

import { MenuLink } from '@frontendTypes';

import { NavigationLink } from './NavigationLink';

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
            <Button variant={'solid'} colorScheme={'teal'} size={'sm'} mr={4} leftIcon={<AddIcon />}>
              {link.label}
            </Button>
          ) : (
            link.label
          )}
        </NavigationLink>
      ))}
  </>
);
