import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

import { FormButton } from '@ui/auths';
import { useFormSubmit } from '@utils/hooks/useFormSubmit';

import { defaultValues } from './default-values';
import { signUpSchema } from './sign-up.schema';
import { SignUpFormData } from './types';

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
    defaultValues,
  });

  const { onSubmit } = useFormSubmit<SignUpFormData>({ reset, method: 'post' });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl id='email' isRequired isInvalid={Boolean(errors.email)}>
          <FormLabel>Email</FormLabel>
          <Input {...register('email')} type='email' />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id='password' isRequired isInvalid={Boolean(errors.password)}>
          <FormLabel>Hasło</FormLabel>
          <InputGroup>
            <Input {...register('password')} type={showPassword ? 'text' : 'password'} />
            <InputRightElement h={'full'}>
              <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id='repeatPassword' isRequired isInvalid={Boolean(errors.repeatPassword)}>
          <FormLabel>Powtórz hasło</FormLabel>
          <InputGroup>
            <Controller
              name='repeatPassword'
              control={control}
              render={({ field }) => <Input {...field} type={showPassword ? 'text' : 'password'} />}
            />
          </InputGroup>
          <FormErrorMessage>{errors.repeatPassword?.message}</FormErrorMessage>
        </FormControl>
        <FormButton>Zarejestruj się</FormButton>
      </Stack>
    </Form>
  );
};
