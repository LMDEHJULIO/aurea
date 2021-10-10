import React from 'react';
import styled from 'styled-components';

const InstagramWallStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 1vw;
    margin-top: 4rem;

    @media screen and (min-width: 998px){
        max-width: 63%;
        margin: 4rem auto;
    }



    .social-gallery__item {
        flex-basis: 50%; 
        position: relative;

        @media screen and (min-width: 768px) {
            flex-basis: 25%;
        }

        &:nth-child(n+7){
            display: none;
            @media screen and (min-width: 768px){
                display: block;
                
            }
        }



        a {
            width: 100%;
            height: 100%;
        }

        img {
            width: inherit;
            height: inherit;
            transition: all .01s;

            &::after {
                display: inline-block;
                display: inline-block;
                width: 2rem;
                height: 2rem;
                content: url(/assets/img/insta-icon.svg);
                font-size: 1em;
                position: absolute;
                z-index: 1;
                left: 85%;
                top: 0.5rem;
        
            }
            

            &:hover {
                filter: brightness(0.7);
            }


        }
    }

`

const InstagramWall = (props) => {
  return (
    <div>
        <span></span>
        <h1 className="section-social__heading">Instagram Wall</h1>

        <InstagramWallStyle className="gallery social-gallery">
            <div className="social-gallery__item social-gallery__item--1"> 
                <a><img src={`${process.env.PUBLIC_URL}/assets/img/yellow-couch.jpg`} alt="instagram-post yellow-couch"/></a>
            </div>

            <div className="social-gallery__item social-gallery__item--2"> 
                <a><img src={`${process.env.PUBLIC_URL}/assets/img/portrait.jpg`} alt="instagram-post portrait"/></a>
            </div>

            <div className="social-gallery__item social-gallery__item--3"> 
                <a><img src={`${process.env.PUBLIC_URL}/assets/img/flower.jpg`} alt="instagram-post yellow-couch"/></a>
            </div>

            <div className="social-gallery__item social-gallery__item--4"> 
                <a><img src={`${process.env.PUBLIC_URL}/assets/img/bedside.jpg`} alt="instagram-post yellow-couch"/></a>
            </div>

            <div className="social-gallery__item social-gallery__item--5"> 
                <a><img src={`${process.env.PUBLIC_URL}/assets/img/livingroom.jpg`} alt="instagram-post yellow-couch"/></a>
            </div>

            <div className="social-gallery__item social-gallery__item--6"> 
                <a><img src={`${process.env.PUBLIC_URL}/assets/img/mirrordesk.jpg`} alt="instagram-post yellow-couch"/></a>
            </div>


            <div className="social-gallery__item social-gallery__item--1"> 
                <a><img src={`${process.env.PUBLIC_URL}/assets/img/yellow-couch.jpg`} alt="instagram-post yellow-couch"/></a>
            </div>

            <div className="social-gallery__item social-gallery__item--2"> 
                <a><img src={`${process.env.PUBLIC_URL}/assets/img/portrait.jpg`} alt="instagram-post yellow-couch"/></a>
            </div>

            <div className="social-gallery__item social-gallery__item--3"> 
                <a><img src={`${process.env.PUBLIC_URL}/assets/img/flower.jpg`} alt="instagram-post yellow-couch"/></a>
            </div>

            <div className="social-gallery__item social-gallery__item--4">  
                <a><img src={`${process.env.PUBLIC_URL}/assets/img/bedside.jpg`} alt="instagram-post yellow-couch"/></a>
            </div>

            <div className="social-gallery__item social-gallery__item--5"> 
                <a><img src={`${process.env.PUBLIC_URL}/assets/img/livingroom.jpg`} alt="instagram-post yellow-couch"/></a>
            </div>

            <div className="social-gallery__item social-gallery__item--6"> 
                <a><img src={`${process.env.PUBLIC_URL}/assets/img/mirrordesk.jpg`} alt="instagram-post yellow-couch"/></a>
            </div>
        </InstagramWallStyle>
    </div>
  )
}

export default InstagramWall;