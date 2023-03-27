import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  height: 500px;
`;

export const Slide = styled.div`
  scroll-snap-align: center;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background-color: #ccc;
`;