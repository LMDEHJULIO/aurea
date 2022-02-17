import React from 'react';
import styled from 'styled-components';

const InspirationCardStyle = styled.div`

    display: flex;
    flex-direction: column;
    /* height: 50rem; */
    justify-content: end;
    align-items: center;
    min-width: 30rem;
    /* @media screen and (min-width: 1024px){
      height: 44rem;
    } */



    .inspiration-body {
        height: 45rem;
        width: 100%;
        background-color: black;
        background-image: url('${(props) => props.bgImg}');
        background-size: cover;
        transition: transform .5s;
        :hover {
            transform: scale(.95);
        }

        @media screen and (min-width: 768px){
            height: 48rem;
        }

        @media screen and (min-width: 872px){
            height: 48rem;
        }

        @media screen and (min-width: 1440px){
            height: 55rem;
        }
    }
    
    .inspiration-card__label {
        background-color: white;
        width: 80%;
        padding: 5rem;
        font-size: 2.3rem;
        margin-top: -10rem;
        position: relative;
        z-index:1;

        .inspiration-card__heading {
            display: flex;
            

            span {
            background-color: red;
            width: 4rem;
            height: .2rem;
            display: block;
            }

            h3{
                font-size: 1.4rem;
                font-weight: 500;
                color: #b92727;
            }

        }


        
    }


`

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