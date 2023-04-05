import { Flex, FlexProps, Icon } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

import { CustomLink } from '@base/CustomLink';

interface NavItemProps extends FlexProps {
  icon: IconType;
  to: string;
  children: ReactNode;
}
export const SidebarNavigationItem = ({ icon, to, children, ...rest }: NavItemProps) => {
  return (
    <CustomLink to={to} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='18'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </CustomLink>
  );
};
