import { LoginUserRequest } from '@backendTypes';
import { FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

import { signInSchema } from '@forms/auth/SignInForm/sign-in.schema';
import { AuthFormButton } from '@ui/auths';
import { useFormSubmit } from '@utils/hooks';

import { defaultValues } from './default-values';

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginUserRequest>({
    resolver: yupResolver(signInSchema),
    defaultValues,
  });
  const { onSubmit } = useFormSubmit<LoginUserRequest>({ reset, method: 'post' });
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
          <Input {...register('password')} type='password' />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <AuthFormButton>Zaloguj się</AuthFormButton>
      </Stack>
    </Form>
  );
};
