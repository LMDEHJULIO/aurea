import React from 'react';

const Hero = () => {
  return (
    <div className="hero-slider">

        <div className="title-box">
          <h3 className="title-box__category title-box__item">News</h3>

          <h2 className="title-box__heading title-box__item">
              Great style is easy
          </h2>
          
          <div className="title-box__cta">
            <a className="title-box__cta-arrow"><img src={`${process.env.PUBLIC_URL}/assets/img/product-link-arrow.svg`}/></a>
            <a className="title-box__cta-link title-box__item">View More</a> 
          </div>
        </div>

        <div class="slider-links">
          <a href="#" class="slider-dots"></a>
          <a href="#" class="slider-dots"></a>
          <a href="#" class="slider-dots"></a>
        </div>

    </div>
  )
}

export default Hero