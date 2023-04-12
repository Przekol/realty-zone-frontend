import { UserProfileResponse } from '@backendTypes';
import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { EditProfileForm } from '@forms/profil/EditProfileForm';
import { ProfileDetails } from '@ui/ProfileDetails';

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const profile = useLoaderData() as UserProfileResponse;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <Box w={'full'} bg={'gray.50'} boxShadow={'2xl'} rounded={'lg'} p={6} textAlign={'center'}>
      {isEditing ? (
        <EditProfileForm profile={profile} setIsEditing={setIsEditing} />
      ) : (
        <ProfileDetails details={profile} />
      )}

      {!isEditing && (
        <Button mt={4} colorScheme='blue' alignSelf='center' onClick={handleEditClick}>
          Uzupełnij profil
        </Button>
      )}
    </Box>
  );
};
