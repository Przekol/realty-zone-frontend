import { Box, Center, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import { ComingSoonImage } from '@assets';

const ComingSoon = () => {
  return (
    <Center h='100vh' bg='gray.100'>
      <VStack spacing={4} textAlign='center'>
        <Box>
          <Heading as='h1' size='2xl'>
            Strona w budowie
          </Heading>
        </Box>
        <Box>
          <Text fontSize='xl'>Pracujemy nad nowymi funkcjami. Proszę wrócić wkrótce!</Text>
        </Box>
        <Box>
          <Image src={ComingSoonImage} alt='Opis zdjęcia' objectFit='cover' borderRadius='md' width={'xl'} />
        </Box>
      </VStack>
    </Center>
  );
};

export default ComingSoon;
