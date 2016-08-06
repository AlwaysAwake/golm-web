import React from 'react';
import Slider from 'react-slick';


const sliderSettings = {
  dots: true,
  centerMode: true,
};

const Swiper = () => {
  return (
    <Slider {...sliderSettings}>
      <div><img className="centered" src="https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/main_banner_01.png" alt=""/></div>
      <div><img className="centered" src="http://placehold.it/400x200" alt=""/></div>
      <div><img className="centered" src="http://placehold.it/400x200" alt=""/></div>
      <div><img className="centered" src="http://placehold.it/400x200" alt=""/></div>
      <div><img className="centered" src="http://placehold.it/400x200" alt=""/></div>
      <div><img className="centered" src="http://placehold.it/400x200" alt=""/></div>
    </Slider>
  );
};

export default Swiper;
