import { Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  offerNumber: number;
  title: string;
}
export const OfferDetailsButton = ({ offerNumber, title }: Props) => {
  const navigate = useNavigate();
  const offerSlug = (title: string) => title.toLowerCase().split(' ').join('-');
  const handleOpenDetails = (offerNumber: number, title: string) => {
    navigate(`/offers/${offerNumber}/${offerSlug(title)}`);
  };
  return (
    <Button
      onClick={() => handleOpenDetails(offerNumber, title)}
      size='lg'
      bg={'blue.400'}
      color={'white'}
      _hover={{
        bg: 'blue.500',
      }}
    >
      Szczegóły
    </Button>
  );
};
