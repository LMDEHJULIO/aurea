import React, {useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import {IoIosArrowDropleft, IoIosArrowDropright} from 'react-icons/io';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import styled from 'styled-components';
import CtaBumper from './CtaBumper';
const SliderStyle = styled.section`

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 756px){
    width: 50%;
    margin: 0 auto;
  }

  .bumper-label {

    align-self: center;
    @media screen and (min-width: 1024px) {
      margin-right: 4rem;
    }

    &__text {
      writing-mode: tb-rl;
      transform: rotate(-180deg);
      text-transform: uppercase;
      font-weight: 400;
      font-size: 1.5rem;
      display: none;
      letter-spacing: .15rem;

      span {
        color: red;
      }

      @media screen and (min-width: 1024px) {
        display: inline;
      }
    }
    }

  .bumper-cta {
    background-color: white;
    margin-top: -58px;
    position: relative;
    z-index: 999;
    width: 50%;
    margin: -26px auto 0 auto;
  }

.image {
  width: 100%;
}

.arrow-container {
  /* order: 2; */
  display: none;

  @media screen and (min-width: 756px){
    display: flex;
    flex-direction: column;
  }
}

.arrow {
  font-size: 4.5rem;
  color: black; 
  z-index: 10;
  cursor: pointer;
  user-select:none; 
  padding: 1rem;
  /* background-color: black; */
  border: solid 1px grey;
  border-radius: 100%;

  &--left {
    margin-bottom: 2rem;
  }

  &:active, &:visited {
    background-color: black;
    color: white;
  }
}

.slide {
  opacity: 0;
  transition-duration: 1s ease;
  width: 100%;
  position: absolute;
  
  &.active {
    opacity: 1; 
    transition-duration: 1s;
    position: relative;
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
        <div className="bumper-label">
          <h4 className="bumper-label__text"><span>Lorem</span> / Ipsum Dolor Sit Amet</h4>
        </div>
     
        {
            slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                        {index === current && (
                            <img src={slide.image} alt="furniture" className="image"/>
                        )}

                        <div className="bumper-cta">
                          <h3>Varius Enim</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit varius in eros elementum tristique.</p>
                        </div>
                    </div>
                )
            })
        }
   

        <div className="arrow-container">
          <IoIosArrowBack className="arrow arrow--left" onClick={prevSlide}/>
          <IoIosArrowForward className="arrow arrow--right"  onClick={nextSlide}/>
        </div>
      </SliderStyle>
  )
}

export default SliderBumper 