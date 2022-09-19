import React, {useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import {IoIosArrowDropleft, IoIosArrowDropright} from 'react-icons/io';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import styled from 'styled-components';
import {CtaBumperStyle} from './styles/CtaBumperStyle';

const SliderBumper = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
      setCurrent(current === length -1 ? 0 : current + 1);
    }

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
    }

  

  return (
      <CtaBumperStyle className="slider-bumper">

        {/* same  */}
        <div className="bumper-label">
          <h4 className="bumper-label__text"><span>Lorem</span> / Ipsum Dolor Sit Amet</h4>
        </div>
     
        {/* different/children */}
        {
            slides && slides?.map((slide, index) => {
                return (
                    <div className={index === current ? "slide active" : "slide"} key = {index}>

                        {index === current && (
                            <img src={slide.image} alt="furniture" className="image"/>
                            
                        )}
                    </div>
                )
            })
        }

        <div className="bumper-cta">
          <h3>Varius Enim</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit varius in eros elementum tristique.</p>
        </div>
{/* 
        <div className="bumper__content bumper__content--furniture">
              <h3 className="bumper__title">{props.textData.title}</h3>
              <p>
              {props.textData.text}
              </p>
              <a>{props.textData.linkText}</a>
        </div> */}

        {/* <div class="slider-links">
          <a href="#" class="slider-dots" onClick={() =>{ setCurrent(0)}}></a>
          <a href="#" class="slider-dots" onClick={() => setCurrent(1)}></a>
          <a href="#" class="slider-dots" onClick={() => setCurrent(2)}></a>
        </div> */}
   
        {/* //different */}
        <div className="arrow-container">
          <IoIosArrowBack className="arrow arrow--left" onClick={prevSlide}/>
          <IoIosArrowForward className="arrow arrow--right"  onClick={nextSlide}/>
        </div>
      </CtaBumperStyle>
  )
}

export default SliderBumper 