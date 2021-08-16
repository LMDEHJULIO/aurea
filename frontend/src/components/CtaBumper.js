import React from 'react';
import styled from 'styled-components';

const CtaBumperStyle = styled.div`

  
  margin-bottom: 9rem;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  max-width: 286rem;

  @media screen and (min-width: 768px){
    width: 70%;
    height: 34vw;
    max-height: 121rem;
    margin-bottom: 14rem;
  }
  /* @media screen and (min-width: 768px) {
    margin: 0 6rem 9rem 6rem;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
    margin: 0 16rem 9rem 11rem;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 23rem 9rem 18rem;
  }

  @media screen and (min-width: 2560px){
    margin: 0 43rem 9rem 38rem;
  } */



  // &--furniture {
  //   margin-bottom: 5rem;
  // }

  .bumper--furniture {
    background-color: black;
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

  &__img {
    // height: 17rem;
    width: 100%;

    @media screen and (min-width: 479px) {
      height: 27rem;
    }

    @media screen and (min-width: 768px) {
      height: 35rem;
    }

    @media screen and (min-width: 1440px) {
      height: 74rem;
    }
  }


  .bumper-body {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    ${(props) => props.type === 'furniture' && `background-image: url("../../assets/img/bedding.jpg");`};
    ${(props) => props.type === 'objects' && `background-image: url("../../assets/img/kitchen.jpg");`};
    min-height: 48rem;
    background-repeat: no-repeat;
    background-size: cover;
  }
  

  .bumper__content {
    padding: 2rem;
    background-color: white;
    height: 22rem;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -webkit-box-shadow: 0px 10px 23px 0px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: 0px 10px 23px 0px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 10px 23px 0px rgba(0, 0, 0, 0.07);

    @media screen and (min-width: 479px) {
      width: 75%;
      align-self: center;
      margin-top: -6rem;

      text-align: center;
      padding: 3rem 7rem; 
    }

    @media screen and (min-width: 768px) {
      width: 75%;
      align-self: center;
      height: 24rem;
      text-align: center;
      padding: 3rem 7rem; 
      transform: translateY(40%);
    }

    @media screen and (min-width: 1024px) {

      width: 88%;
      align-self: center;
      margin-top: -25rem;
    }

    @media screen and (min-width: 1440px) {
      height: 19rem;
      margin-top: -11rem;
    }

    @media screen and (min-width: 2560px) {
      width: 56%;
    }





    h3 {
      font-weight: 600;
      letter-spacing: 0.2rem;
      font-size: 1.4rem;
      text-transform: uppercase;
      text-align: center;
      }

    p {
      font-size: 1.8rem;
      line-height: 2.5rem;
      letter-spacing: .04rem;
    }

    a {
      text-align: right;
      color: #c62828;
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: .1rem;
    }
  }


`

const CtaBumper = ({...props}) => {

    return (
      <CtaBumperStyle className="bumper bumper--furniture" type={props.type}>
        <div className="bumper-label">
          <h4 className="bumper-label__text"><span>Lorem</span> / Ipsum Dolor Sit Amet</h4>
        </div>


        <div className="bumper-body">
          {/* <div className="bumper__img bumper__img--furniture"></div> */}

          {/* <img className="bumper__img bumper__img--furniture" 
              src={`${process.env.PUBLIC_URL}/assets/img/800-bedding.jpeg`} 
              srcset={`${process.env.PUBLIC_URL}/assets/img/1600-bedding.jpeg 1600w, 
              ${process.env.PUBLIC_URL}/assets/img/1750-bedding.jpeg 1750w`}
              /> */}
      
          <div className="bumper__content bumper__content--furniture">
            <h3 className="bumper__title">{props.textData.title}</h3>
            <p>
            {props.textData.text}
            </p>
            <a>{props.textData.linkText}</a>
        </div>
      </div>

      </CtaBumperStyle>
    )

}

export default CtaBumper 