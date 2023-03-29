import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { CustomLink } from '@base/CustomLink';
interface Props {
  title: string;
  subTitle?: string;
  content: string;
  to: string;
  buttonText: string;
  children: ReactNode;
}

export const Information = ({ title, content, to, buttonText, subTitle, children }: Props) => (
  <Box textAlign='center' py={10} px={6}>
    {children}
    <Heading as='h2' size='xl' mt={6} mb={2}>
      {title}
    </Heading>
    {subTitle && (
      <Heading as='h3' size='md' mt={6} mb={2}>
        {subTitle}
      </Heading>
    )}
    <Text color={'gray.500'}>{content}</Text>
    <CustomLink to={to}>
      <Button colorScheme='blue' color='white' variant='solid' mt={8}>
        {buttonText}
      </Button>
    </CustomLink>
  </Box>
);
