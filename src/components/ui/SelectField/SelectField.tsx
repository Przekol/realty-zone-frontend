import { DictionaryEntity } from '@backendTypes';
import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';
import { FieldError } from 'react-hook-form';

interface Props {
  id: string;
  label: string;
  register: object;
  options: DictionaryEntity[];
  defaultValue: string | number;
  errors?: FieldError | undefined;
}

export const SelectField = ({ id, label, register, options, defaultValue, errors }: Props) => {
  return (
    <FormControl id={id} isRequired isInvalid={Boolean(errors)}>
      <FormLabel>{label}</FormLabel>
      <Select {...register}>
        <option value={defaultValue} disabled>
          Wybierz {label.toLowerCase()}
        </option>
        {options.map((option: DictionaryEntity) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
      <FormErrorMessage>{(errors as FieldError)?.message}</FormErrorMessage>
    </FormControl>
  );
};
