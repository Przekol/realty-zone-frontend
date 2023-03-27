import { FormControl, Input, Stack } from '@chakra-ui/react';
import React from 'react';

import { FormButton, FormCard, FormContainer, FormFooter, FormHeading } from '../../../components/Form';
import { forgetPasswordLinks } from '../../../data/links';

export const ForgetPassword = () => {
  return (
    <FormContainer>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <FormHeading
          title='Zapomniałeś hasła?'
          description='Podaj adres e-mail, by otrzymać wiadomość e-mail z linkiem do resetowania'
        />
        <FormCard>
          <Stack spacing={4}>
            <FormControl id='email'>
              <Input placeholder='your-email@example.com' _placeholder={{ color: 'gray.500' }} type='email' />
            </FormControl>
            <FormButton>Zresetuj hasło</FormButton>
            <FormFooter links={forgetPasswordLinks} />
          </Stack>
        </FormCard>
      </Stack>
    </FormContainer>
  );
};
