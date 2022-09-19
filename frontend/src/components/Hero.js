import React, { Children, useState } from 'react';
import { Link } from 'react-router-dom';
import { SliderData } from './SliderData';
import { HeroSliderStyle } from './styles/HeroSliderStyle';

const Hero = () => {
  const [current, setCurrent] = useState(0);

  return (
    <HeroSliderStyle className="hero-slider" currentImage={current}>

        <div className="title-box">
          <h3 className="title-box__category title-box__item">{SliderData[current].header}</h3>

          <h2 className="title-box__heading title-box__item">
              {SliderData[current].subHeader}
          </h2>
          
     
            <Link to="news" className="title-box__cta">
              <div className="title-box__cta-arrow"><img src={`${process.env.PUBLIC_URL}/assets/img/product-link-arrow.svg`}/></div>
              <span className="title-box__cta-link title-box__item" to="/news">View More</span> 
            </Link>
   
        </div>

        <div className="slider-links">
          <a href="#" className="slider-dots" onClick={() => setCurrent(0) }></a>
          <a href="#" className="slider-dots" onClick={() => setCurrent(1)}></a>
          <a href="#" className="slider-dots" onClick={() => setCurrent(2)}></a>
        </div>

    </HeroSliderStyle>
  )
}

export default Hero