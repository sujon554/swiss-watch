import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

import slider1 from "../../../images/slider/slider1.jpg"
import slider2 from "../../../images/slider/slider2.jpg"
import slider3 from "../../../images/slider/slide-3.jpg"



const Slider = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="Second slide" />
          <Carousel.Caption>
            <h1>THE WATCH EVERYONE DESIRE</h1>
            <p>
              Rolex watches are crafted from the finest raw materials and
              assembled with scrupulous attention to detail. Discover the Rolex
              collection on the Official .
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
          <Carousel.Caption>
            <h1>AN EXTRAORDINARY CLASSIC</h1>
            <p>
              Rolex SA is a British-founded Swiss watch designer & manufacturer
              Switzerland. Founded in 1905 as Wilsdorf and Davis by Hans
              Wilsdorf and Alfred Davis in London
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
          <Carousel.Caption>
            <h1>WATCH FOR HIGH-TECH PROPLE</h1>
            <p>
              Rolex watches are crafted from the finest raw materials and
              assembled with scrupulous attention to detail. Discover the Rolex
              collection on the Official .
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;