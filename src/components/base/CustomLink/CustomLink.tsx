import { Link, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface Props extends ChakraLinkProps {
  children: React.ReactNode;
  to: string;
}

export const CustomLink = ({ children, to, ...rest }: Props) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      _hover={{
        textDecoration: 'none',
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};
