import { OneOfferUserResponse } from '@backendTypes';
import { Box, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

interface OwnerProps {
  owner: OneOfferUserResponse;
}
export const OfferOwnerDetails = ({ owner }: OwnerProps) => {
  return (
    <Box mt={4} p={4} rounded={'md'} boxShadow={'lg'}>
      <Heading fontSize='lg' mb={2}>
        Dane właściciela:
      </Heading>
      <Text>
        Email:{' '}
        <Link href={`mailto:${owner.email}`} fontWeight='bold' color='blue.500'>
          {owner.email}
        </Link>
      </Text>
      <Text>
        Numer telefonu:{' '}
        {owner.phone ? (
          <Link href={`tel:${owner.phone}`} fontWeight='bold' color='blue.500'>
            {owner.phone}
          </Link>
        ) : (
          'Brak numeru'
        )}
      </Text>
    </Box>
  );
};
