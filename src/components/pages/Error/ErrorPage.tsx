import { CloseIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useRouteError } from 'react-router-dom';

import { ROUTES } from '@routes/routes';
import { Information } from '@ui/Information/Information';

import { DefaultLayout } from '../../../layouts/DefaultLayout';

export const ErrorPage = () => {
  const error = useRouteError() as any;
  const title = error?.status === 404 ? 404 : error?.status;
  const subTitle = error?.status === 404 ? 'Strona nie istnieje' : 'Wystąpił błąd';
  return (
    <DefaultLayout>
      <Box textAlign='center' py={10} px={6}>
        <Information
          title={title}
          subTitle={subTitle}
          content={error?.message}
          to={ROUTES.home}
          buttonText={'Powrót na stronę główną'}
        >
          <Box display='inline-block'>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              bg={'red.500'}
              rounded={'50px'}
              w={'55px'}
              h={'55px'}
              textAlign='center'
            >
              <CloseIcon boxSize={'20px'} color={'white'} />
            </Flex>
          </Box>
        </Information>
      </Box>{' '}
    </DefaultLayout>
  );
};
