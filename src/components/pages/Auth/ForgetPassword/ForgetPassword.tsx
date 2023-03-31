import { FormControl, Input, Stack } from '@chakra-ui/react';
import React from 'react';

import { CenterContainer } from '@base/CenterContainer';
import { AuthFormButton, AuthFormCard, AuthFormLinks } from '@ui/auths';
import { AuthFormCaption } from '@ui/captions';
import { forgetPasswordLinks } from '@utils/data/links';

export const ForgetPassword = () => {
  return (
    <CenterContainer maxW={'md'}>
      <AuthFormCaption
        title='Zapomniałeś hasła?'
        description='Podaj adres e-mail, by otrzymać wiadomość e-mail z linkiem do resetowania'
      />
      <AuthFormCard>
        <Stack spacing={4}>
          <FormControl id='email'>
            <Input placeholder='your-email@example.com' _placeholder={{ color: 'gray.500' }} type='email' />
          </FormControl>
          <AuthFormButton>Zresetuj hasło</AuthFormButton>
          <AuthFormLinks links={forgetPasswordLinks} />
        </Stack>
      </AuthFormCard>
    </CenterContainer>
  );
};
