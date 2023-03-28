import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

import { AuthFormButton, AuthFormCard, AuthFormContainer, AuthFormLinks } from '@ui/auths';
import { AuthFormCaption } from '@ui/captions';
import { signUpLinks } from '@utils/data/links';

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthFormContainer>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <AuthFormCaption title='Zarejestruj się' description='i ciesz się wszystkimi naszymi funkcjonalnościami' />
        <AuthFormCard>
          <Stack spacing={4}>
            <FormControl id='email' isRequired>
              <FormLabel>Email</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Hasło</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id='repeatPassword' isRequired>
              <FormLabel>Powtórz hasło</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
              </InputGroup>
            </FormControl>
            <AuthFormButton>Zarejestruj się</AuthFormButton>
            <AuthFormLinks links={signUpLinks} />
          </Stack>
        </AuthFormCard>
      </Stack>
    </AuthFormContainer>
  );
};
