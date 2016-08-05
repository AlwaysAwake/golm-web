import React from 'react';
import Slider from 'react-slick';


const sliderSettings = {
  dots: true,
  centerMode: true,
};

const Swiper = () => {
  return (
    <Slider {...sliderSettings}>
      <div><img className="centered" src="http://placehold.it/400x200" alt=""/></div>
      <div><img className="centered" src="http://placehold.it/400x200" alt=""/></div>
      <div><img className="centered" src="http://placehold.it/400x200" alt=""/></div>
      <div><img className="centered" src="http://placehold.it/400x200" alt=""/></div>
      <div><img className="centered" src="http://placehold.it/400x200" alt=""/></div>
      <div><img className="centered" src="http://placehold.it/400x200" alt=""/></div>
    </Slider>
  );
};

export default Swiper;
