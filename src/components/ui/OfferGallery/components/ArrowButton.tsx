import { IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/all';

interface Props {
  direction: 'left' | 'right';
  onClick: () => void;
}

export const ArrowButton = ({ direction, onClick }: Props) => {
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  const arrowIcon = direction === 'left' ? <BiLeftArrowAlt /> : <BiRightArrowAlt />;
  const position = direction === 'left' ? { left: side } : { right: side };

  return (
    <IconButton
      aria-label={`${direction}-arrow`}
      colorScheme='messenger'
      borderRadius='full'
      position='absolute'
      top={top}
      transform={'translate(0%, -50%)'}
      zIndex={2}
      onClick={onClick}
      {...position}
    >
      {arrowIcon}
    </IconButton>
  );
};
