import { Box } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';

import { slickSettings } from '@utils/config';

import { ArrowButton, PhotoSlide } from './components';

interface Props {
  photos: string[];
}
export const OfferGallery = ({ photos }: Props) => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  return (
    <Box position={'relative'} height='full' width={'full'} overflow={'hidden'} py={8}>
      {/* CSS files for react-slick */}
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      {/* Left Icon */}
      <ArrowButton direction='left' onClick={() => slider?.slickPrev()} />
      {/* Right Icon */}
      <ArrowButton direction='right' onClick={() => slider?.slickNext()} />
      {/* Slider */}
      <Slider {...slickSettings} ref={(slider) => setSlider(slider)}>
        {photos.map((url, index) => (
          <PhotoSlide key={index} url={url} />
        ))}
      </Slider>
    </Box>
  );
};
