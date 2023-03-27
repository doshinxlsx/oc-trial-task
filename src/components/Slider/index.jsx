import React, { useState } from 'react';
import { SliderContainer, Slide } from './styles'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSliderChange = (event) => {
    setCurrentSlide(event.target.scrollLeft);
  };

  return (
    <SliderContainer onScroll={handleSliderChange}>
      <Slide>Slide 1</Slide>
      <Slide>Slide 2</Slide>
      <Slide>Slide 3</Slide>
    </SliderContainer>
  );
};

export default Slider;
