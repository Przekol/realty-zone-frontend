import { IconProps } from '@chakra-ui/icons';
import { Box, Button, ComponentWithAs, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import { CustomLink } from '@base/CustomLink';
interface Props {
  title: string;
  content: string;
  to: string;
  buttonText: string;
  Icon: ComponentWithAs<'svg', IconProps>;
}

export const Information = ({ title, content, to, buttonText, Icon }: Props) => (
  <Box textAlign='center' py={10} px={6}>
    <Icon boxSize={'50px'} color={'green.500'} />
    <Heading as='h2' size='xl' mt={6} mb={2}>
      {title}
    </Heading>
    <Text color={'gray.500'}>{content}</Text>
    <CustomLink to={to}>
      <Button colorScheme='blue' color='white' variant='solid' mt={8}>
        {buttonText}
      </Button>
    </CustomLink>
  </Box>
);
