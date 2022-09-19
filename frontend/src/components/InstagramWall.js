import React from 'react';
import { InstagramWallStyle } from './styles/InstagramWallStyle';


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