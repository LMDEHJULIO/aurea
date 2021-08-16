import React from 'react';
import styled from 'styled-components';

const FullBumperStyle = styled.div`

    background-image: url("../../assets/img/couch-corner.jpg");
    background-size: cover;
    width: 100%;
    min-height: 31rem;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    display: flex;
    align-items: center;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 30vw;
  
    h3 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }
  
    @media screen and (min-width: 768px){
      /* height: 69rem; */
      padding: 7rem;
      h3{
        font-size: 3rem;
      }
    }
  
    @media screen and (min-width: 1024px) {
      /* height: 61rem; */
      display: flex;
      flex-direction: column;
    }
  
    @media screen and (min-width: 2560px){
      /* height: 110rem; */
    }
  
    .img-bumper__cta {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  
    .title-box__cta-arrow {
      border: solid 1px grey;
      width: 4.5rem;
      height: 4.5rem;
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
  
   
  a {
    text-transform: uppercase;
    color: #d60808;
    font-size: 1.5rem;
    letter-spacing: .2rem;
    line-height: 1.5rem;
  
  }
  
  
  
  


`


const FullWidthBumper = (props) => {
  return (
    <FullBumperStyle class="img-bumper">
        <h3>Sed ultrices leo sed diam</h3>

        <div className="img-bumper__cta">
            <a className="title-box__cta-arrow"><img src={`${process.env.PUBLIC_URL}/assets/img/product-link-arrow.svg`}/></a>
            <a className="title-box__cta-link title-box__item">View More</a> 
          </div>
         
    </FullBumperStyle>
  )
}

export default FullWidthBumper;