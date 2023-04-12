import { UpdateUserRequest, UserProfileResponse } from '@backendTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, useSubmit } from 'react-router-dom';

import { FormButton } from '@ui/auths';
import { FormField } from '@ui/FormField';

import { updateProfileSchema } from './update-profil.schema';

interface Props {
  profile: UserProfileResponse;
  setIsEditing: (isEditing: boolean) => void;
}

export const EditProfileForm = ({ profile, setIsEditing }: Props) => {
  const defaultValues = {
    firstName: profile.firstName,
    lastName: profile.lastName,
    username: profile.username,
    phoneNumber: profile.phoneNumber,
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(updateProfileSchema),
  });

  const submit = useSubmit();

  const onSubmit = (data: UpdateUserRequest) => {
    setIsEditing(false);
    reset();
    submit({ ...data }, { method: 'post' });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        isRequired={false}
        id={'firstName'}
        label={'Imię'}
        register={register('firstName')}
        errors={errors.firstName}
      />
      <FormField
        isRequired={false}
        id={'lastName'}
        label={'Nazwisko'}
        register={register('lastName')}
        errors={errors.lastName}
      />
      <FormField
        isRequired={false}
        id={'username'}
        label={'Nazwa użytkownika'}
        register={register('username')}
        errors={errors.username}
      />
      <FormField
        isRequired={false}
        id={'phoneNumber'}
        label={'Numer telefonu'}
        register={register('phoneNumber')}
        errors={errors.phoneNumber}
      />
      <FormButton>Zakończ</FormButton>
    </Form>
  );
};
