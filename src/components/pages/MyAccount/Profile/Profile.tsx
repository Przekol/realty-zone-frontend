import { UserProfileResponse } from '@backendTypes';
import { Button, Stack, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { EditProfileAvatarForm } from '@forms/profil/EditProfileAvatarForm';
import { EditProfileForm } from '@forms/profil/EditProfileForm';
import { ProfileDetails } from '@ui/ProfileDetails';

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const profile = useLoaderData() as UserProfileResponse;

  const handleEditProfileClick = () => {
    setIsEditing(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditingAvatar(true);
  };

  return (
    <>
      <VStack w={'full'} bg={'gray.50'} boxShadow={'2xl'} rounded={'lg'} p={6} textAlign={'center'}>
        {isEditing ? (
          <EditProfileForm profile={profile} setIsEditing={setIsEditing} />
        ) : (
          <ProfileDetails details={profile} />
        )}
        {isEditingAvatar && <EditProfileAvatarForm setIsEditingAvatar={setIsEditingAvatar} />}

        {!isEditing && (
          <Stack spacing={4}>
            <Button
              mt={4}
              w={'sm'} // Dodaj tę linijkę
              colorScheme='blue'
              alignSelf='center'
              onClick={handleEditProfileClick}
            >
              Uzupełnij profil
            </Button>
            {!isEditingAvatar && (
              <Button
                mt={4}
                w={'sm'} // Dodaj tę linijkę
                colorScheme='blue'
                alignSelf='center'
                onClick={handleEditAvatarClick}
              >
                Dodaj avatar
              </Button>
            )}
          </Stack>
        )}
      </VStack>
    </>
  );
};
