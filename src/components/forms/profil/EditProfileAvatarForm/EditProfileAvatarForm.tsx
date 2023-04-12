import { Stack } from '@chakra-ui/react';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@routes/routes';
import { CustomError } from '@utils/exceptions';

interface Props {
  setIsEditingAvatar: (isEditing: boolean) => void;
}

export const EditProfileAvatarForm = ({ setIsEditingAvatar }: Props) => {
  const navigate = useNavigate();
  const [uppy, setUppy] = useState<Uppy>();

  useEffect(() => {
    const newUppy = new Uppy({
      autoProceed: false,
      restrictions: {
        maxNumberOfFiles: 1,
        allowedFileTypes: ['image/*'],
      },
    }).use(XHRUpload, {
      endpoint: `${import.meta.env.VITE_BACKEND_API}/users/profile/avatar`,
      fieldName: 'avatar',
      headers: {},
      withCredentials: true,
      getResponseData: () => {
        setIsEditingAvatar(false);
        navigate(ROUTES.myAccount.base);
      },
      getResponseError: () => {
        return new CustomError('Error', 400);
      },
    });

    setUppy(newUppy);

    return () => {
      if (newUppy) {
        newUppy.close();
      }
    };
  }, []);
  if (!uppy) {
    return null;
  }

  return (
    <Stack w={'sm'}>
      <Dashboard uppy={uppy} />
    </Stack>
  );
};
