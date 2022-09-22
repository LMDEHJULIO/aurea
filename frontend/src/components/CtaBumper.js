import React, { Children, useState } from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import { CtaBumperStyle } from './styles/CtaBumperStyle';


const CtaBumper = ({slides, type, title, text, defaultLink, loremText, isSlider, backgroundImg, link}) => {

  const [current, setCurrent] = useState(0);
  const length = slides?.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

    return (
      <CtaBumperStyle className="bumper bumper--furniture" type={type} isSlider={isSlider}>


        <div className="bumper-label">
          <h4 className="bumper-label__text"><span>Lorem</span> / Ipsum Dolor Sit Amet</h4>
        </div>

        <div className='bumper-image__container'>
          {
            type === 'furniture' &&
            <img className="bumper-image" src="https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab3176079a9b_image10.jpg" sizes="(max-width: 767px) 100vw, (max-width: 991px) 87vw, 69vw" srcSet="https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab3176079a9b_image10-p-800.jpeg 800w, https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab3176079a9b_image10-p-1600.jpeg 1600w, https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab3176079a9b_image10.jpg 1750w" alt=""/>
          }

          {
            type === 'objects' &&
            <img className="bumper-image" src="https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab81be079a9c_image8.jpg" sizes="(max-width: 767px) 100vw, (max-width: 991px) 87vw, 69vw" srcSet="https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab81be079a9c_image8-p-500.jpeg 500w, https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab81be079a9c_image8-p-800.jpeg 800w, https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab81be079a9c_image8-p-1600.jpeg 1600w, https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab81be079a9c_image8.jpg 1750w" alt="" />
          }

          {isSlider &&
          
         
                    <div className="slide active bumper-image" >
                            <img src={slides[current].image} sizes="(max-width: 767px) 100vw, (max-width: 991px) 87vw, 69vw" srcSet={`${slides[current].image}.jpg 1750w`} alt="" className="bumper-image"/>
                    </div>
            }

            {
              type === 'news' &&
              <img className='bumper-imge' src={backgroundImg} sizes="(max-width: 767px) 100vw, (max-width: 991px) 87vw, 69vw" srcSet={`${backgroundImg} 500w, ${backgroundImg} 800w, ${backgroundImg} 1750w`} />
            }
          </div>



        <div className="bumper__content bumper__content--furniture">
              {title && <h3 className="bumper__title">{title}</h3>}
              <p>
                {loremText ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit varius in eros elementum tristique." : text}
              </p>
              <a href="/collection">
                {
                  defaultLink ? 
                  "View the Collection":
                  link
                }
              </a>
        </div>

        {
          isSlider && 

          <div className="arrow-container">
            <IoIosArrowBack className="arrow arrow--left" onClick={prevSlide}/>
            <IoIosArrowForward className="arrow arrow--right"  onClick={nextSlide}/>
          </div>
        }

      </CtaBumperStyle>
    )

}

export default CtaBumper 
export {CtaBumperStyle}