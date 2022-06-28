import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import { Carousel } from 'react-bootstrap';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

export default function index() {
  return (
    <>
    <div className="homeSlider mb-5">
        <Slider {...settings}>
            <div>
                <img src={'/images/image1.jpg'} alt="slider one"/>
            </div>
            <div>
                <img src={'/images/image2.jpg'} alt="slider two"/>
            </div>
            <div>
                <img src={'/images/image3.jpg'} alt="slider three"/>
            </div>
        </Slider>
    </div>
    </>
  )
}
