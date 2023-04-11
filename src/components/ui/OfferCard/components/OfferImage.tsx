import { Flex, Image } from '@chakra-ui/react';

interface Props {
  src: string;
}
export const OfferImage = ({ src }: Props) => (
  <Flex>
    <Image rounded={'md'} alt={'feature image'} src={src} objectFit={'cover'} />
  </Flex>
);
