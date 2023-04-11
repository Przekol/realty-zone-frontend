import { FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react';
import React from 'react';
import { FieldError } from 'react-hook-form';

interface Props {
  id: string;
  label: string;
  register: object;
  errors?: FieldError | undefined;
  type?: string;
  textarea?: boolean;
}

export const FormField = ({ id, label, register, errors, type, textarea = false }: Props) => {
  return (
    <FormControl id={id} isRequired isInvalid={Boolean(errors)}>
      <FormLabel>{label}</FormLabel>
      {textarea ? <Textarea {...register} /> : <Input {...register} type={type || 'text'} />}
      <FormErrorMessage>{(errors as FieldError)?.message}</FormErrorMessage>
    </FormControl>
  );
};
