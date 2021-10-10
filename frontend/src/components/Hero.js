import React, { Children, useState } from 'react';
import styled from 'styled-components';
import { SliderData } from './SliderData';

const HeroSliderStyle = styled.div`

    /* background-image: url("../../assets/img/latest-couch.jpg"); */
    background-image: url(${ (props) => SliderData[props.currentImage].image });
    background-size: cover;
    background-position: center;
    height: 100%;
    padding: 11rem 4rem 3rem 4rem;
    margin-bottom: 3rem;
    transition: background 1s;
    background-repeat: no-repeat;
  
    @media screen and (min-width: 767px) {
      // height: 100vh;5rem
      padding: 11rem 4rem 10rem 4rem;
      background-position: 95%; 
    } 
  
    @media screen and (min-width: 991px) {
      padding: 11rem 4rem 10rem 16rem;
    }
    
    @media screen and (min-width: 1024px) {
      background-position: 98.4%;
      padding: 11rem 4rem 10rem 14.4rem;
    }
    
  
    .title-box {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      color: white;
      width: 58%;
  
      
  
      &__category {
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: .1rem;
      }
  
      &__heading {
        margin-bottom: 2.8rem;
        font-weight: 400;
        font-size: 5.5vw;
        // letter-spacing: .05rem;
  
        @media screen and (min-width: 375px){
          margin-bottom: 1.8rem;
        }
  
        @media screen and (min-width: 768px) {
          font-size: 2vw;
       }
  
        // @media screen and (min-width: 991px) {
        //    font-size: 2vw;
        // }
      }
  
      &__cta{
        display: flex;
        align-items: center;
        margin-bottom: 3rem;
        font-weight: 600;
  
        @media screen and (min-width: 991px){
          margin-bottom: 6rem;
        }
  
        &-arrow {
          border: solid 1px grey;
          min-width: 5rem;
          min-height: 5rem;
          border-radius: 100%;
          display: inline-block;
          margin-right: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
  
          img {
            width: 1.8rem;
          }
        }
  
      }
       
      a {
        text-transform: uppercase;
        color: #d60808;
        font-size: 1.5rem;
        letter-spacing: .2rem;
        line-height: 1.5rem;
      }


    }
  
  
    .slider-links {
        
      .slider-dots {
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        margin-right: .5rem;
        background-color: #ffffff8f;

    
        &:nth-child(${props => props.currentImage + 1}){
          background-color: white;
        }
      }

    }
`

const Hero = () => {
  const [current, setCurrent] = useState(0);




  return (
    <HeroSliderStyle className="hero-slider" currentImage={current}>

        <div className="title-box">
          <h3 className="title-box__category title-box__item">{SliderData[current].header}</h3>

          <h2 className="title-box__heading title-box__item">
              {SliderData[current].subHeader}
          </h2>
          
          <div className="title-box__cta">
            <a className="title-box__cta-arrow"><img src={`${process.env.PUBLIC_URL}/assets/img/product-link-arrow.svg`}/></a>
            <a className="title-box__cta-link title-box__item">View More</a> 
          </div>
        </div>

        <div class="slider-links">
          <a href="#" class="slider-dots" onClick={() => setCurrent(0) }></a>
          <a href="#" class="slider-dots" onClick={() => setCurrent(1)}></a>
          <a href="#" class="slider-dots" onClick={() => setCurrent(2)}></a>
        </div>

    </HeroSliderStyle>
  )
}

export default Hero