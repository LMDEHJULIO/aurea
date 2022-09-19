import React from 'react';
import { InspirationCardStyle } from './styles/InspirationCardStyle';

const InspirationCard = ({props, className, cardData}) => {
  return (
    <InspirationCardStyle bgImg={cardData.href}>
        <div className="inspiration-body"></div>

        <div className="inspiration-card__label">

            <div className="inspiration-card__heading">
                <h3>VARIUS ENIM</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>

        </div>
    </InspirationCardStyle>
  )
}

export default InspirationCard