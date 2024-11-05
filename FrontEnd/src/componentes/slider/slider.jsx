import React from "react";
import Slider from "react-slick";
import '../slider/slider.css'

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, 
    
    autoplaySpeed: 3000, 
  };
  return (
    <Slider {...settings}>
      <div>
      <img classname="imageSlider" src="/assets/Banners/Banner-Skol.png" alt="" />
      </div>
      <div>
      <img classname="imageSlider" src="/assets/Banners/Jack Daniels.png" alt="" />
      </div>
      <div>
      <img classname="imageSlider" src="assets\Banners\Banner-Promocoes.png" alt="" />
      </div>
     
    </Slider>
  );
}