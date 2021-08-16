import React, {useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import styled from 'styled-components';

const SliderStyle = styled.section`

.slider-bumper {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

.image {
  width: 1000px;
  height: 600px;
  border-radius: 10px;
}

.arrow {
  position: absolute;
  top: 50%;
  font-size: 3rem;
  color: #000; 
  z-index: 10;
  cursor: pointer;
  user-select:none; 

  &--right {
    right: 32px;
  }

  &--left {
    left: 32px;
  }
}

.slide {
  opacity: 0;
  transition-duration: 1s ease;
  &.active {
    opacity: 1; 
    transition-duration: 1s;
    transform: scale(1.08);
  }
}

`

const SliderBumper = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
      setCurrent(current === length -1 ? 0 : current + 1);
    }

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current)

  return (
      <SliderStyle className="slider-bumper">
          <FaArrowAltCircleLeft className="arrow arrow--left" onClick={prevSlide}/>
          <FaArrowAltCircleRight className="arrow arrow--right"  onClick={nextSlide}/>

        {
            slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                        {index === current && (
                            <img src={slide.image} alt="furniture" className="image"/>
                        )}
                    </div>
                )
            })
        }
      </SliderStyle>
  )
}

export default SliderBumper 