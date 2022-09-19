import styled from "styled-components";

export const CtaBumperStyle = styled.div`

  
  /* margin-bottom: 9rem; */
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto;
  max-width: 286rem;

  .bumper-label {

      align-self: center;
      display: none;

      &__text {
        writing-mode: tb-rl;
        transform: rotate(-180deg);
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.5rem;
        letter-spacing: .15rem;

        span {
          color: red;
        }

      }
  }

  .bumper-image {
    max-width: 100%;
    grid-column: 2;
  }

  .bumper-body {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    min-height: 20rem;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bumper__content {
    padding: 2rem;
    background-color: white;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -webkit-box-shadow: 0px 10px 23px 0px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: 0px 10px 23px 0px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 10px 23px 0px rgba(0, 0, 0, 0.07);
    position: relative;

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
      margin: 3rem 0;
    }

    a {
      text-align: right;
      color: #c62828;
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: .1rem;
    }

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
      /* height: 24rem; */
      text-align: center;
      padding: 3rem 7rem; 

      p {
        font-size: 2rem;
      }
    }

    @media screen and (min-width: 1024){
      p {
        line-height: 3rem;
      }
    }


    @media screen and (min-width: 1440px) {
      /* height: 19rem; */
    }

    @media screen and (min-width: 2560px) {
      width: 56%;
    }
  }

  .slide {
    opacity: 0;
    transition: 1s ease;
    width: 100%;
    /* position: absolute; */
    display: none;
    
      &.active {
        opacity: 1; 
        /* position: relative; */
        display: block;
      }
    }

    .arrow-container {
    /* order: 2; */
        margin-left: 2rem;
        display: none;
        grid-column: 3;
        grid-row: 1;
        justify-content: center;

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

      @media screen and (min-width: 1025px){
        display: flex;
        flex-direction: column;
      }
    }

  // OVERALL BUMPER MEDIA QUERIES

  @media screen and (min-width: 768px){
    /* height: 34vw;
    max-height: 121rem; */
    /* margin-bottom: 14rem; */
  }

  @media screen and (min-width: 1024px){
    display: grid; 
    ${(isSlider) => isSlider ? `grid-template-columns: 5rem auto 5rem;` : `grid-template-columns: 5rem auto;`}

    .bumper-label {
      grid-column: 1;
      margin-right: 4rem;
      display: inline;
    }

    .bumper-body {
      grid-column: 2;
      
    }

    .bumper__content {
      grid-column: 2;
      justify-self: center;
      /* margin-top: -10%; */

      p {
        margin: 2rem 0;
        font-size: 2.4rem;
        text-align: left;
      }
    }

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

`