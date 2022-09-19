import React from 'react';
import { FullBumperStyle } from './styles/FullWidthBumperStyle';



const FullWidthBumper = (props) => {
  return (
    <FullBumperStyle className="img-bumper">
        <h3>Sed ultrices leo sed diam</h3>

        <div className="img-bumper__cta">
            <a className="title-box__cta-arrow"><img src={`${process.env.PUBLIC_URL}/assets/img/product-link-arrow.svg`}/></a>
            <a className="title-box__cta-link title-box__item">View More</a> 
          </div>
         
    </FullBumperStyle>
  )
}

export default FullWidthBumper;