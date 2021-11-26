import React from 'react';
import Blog from '../Blog/Blog';
import DisplayProducts from "../DisplayProducts/DisplayProducts";
import Reviews from "../Reviews/Reviews";

import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <DisplayProducts />
      <Reviews />
      <Blog></Blog>
    </div>
  );
};

export default Home;