import React from 'react'
import styled from 'styled-components';
import {FaFacebookSquare,
FaInstagram,
FaTwitter} from 'react-icons/fa'

const FooterStyle = styled.footer`

    max-height: 51rem;
    display: flex;
    flex-direction: column;
  
    img {
      margin-bottom: 2.5rem;
      width: 10rem;
    }
  
    .credit-box {
  
      p:not(:last-child){
        margin-bottom: .5rem;
      }
    }
  
    .icons-container {
      display: flex;
      justify-content: center;
    }
  
    .social-icons {
      border: solid 1px #2c2c2c;
      padding: 1rem;

        &:not(:last-child){
          margin-right: 2rem;
        }
      }
    
      

      svg {
        fill: white;
        font-size: 2rem;
      }
    }
  
    .upper-footer{
      flex: 3;
      background-color: #0e0e0e;
      text-align: center;
      color: grey;
      font-size: 1.2rem;
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      min-height: 25rem;

      .footer-content {

        @media screen and (min-width: 1024px){
          width: 33.33%;
        }
        
      }
  
      &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 2rem;
  
        @media screen and (min-width: 1024px){
          width: 100%;
          flex-direction: row;
  
        }
      }
    }
  
    .lower-footer {

      background-color: black;
      padding: 4rem;

  
  
        .footer-nav-links {
          display: flex;
          flex-direction: column;
          flex: 4;
          margin: 0 auto;
     
  
          @media screen and (min-width: 768px){
            flex-direction: row;
            justify-content: space-evenly;
          }

          @media screen and (min-width: 982px){
            width: 75%;
          }

          @media screen and (min-width: 1500px){
            width: 50%;
          }

          .footer-nav-link {
            color: #848383;
            list-style: none;
            text-align: center;
            text-transform: uppercase;
            font-size: 1.2rem;
            font-weight: 500;
          
            &:not(:last-child){
              margin-bottom: 2rem;
            }
          }
      }

    }
`

const Footer = () => {

  return (
    <FooterStyle>
    <div className="upper-footer">

      <img src={`${process.env.PUBLIC_URL}/assets/img/aurea-logo-white.svg`}></img>
      
      <div className="upper-footer__content">
        <div className="credit-box footer-content">
          <p>Developed by <span>Julio Rodriguez</span></p>
          <p>Designed by <span>Udesly</span></p>
        </div>
      
        <div className="icons-container footer-content">
          <div className="social-icons"><FaFacebookSquare/></div>
          <div className="social-icons"><FaInstagram/></div>
          <div className="social-icons"><FaTwitter/></div>
        </div>

        <div className="copyright footer-content">@COPYRIGHT 2020 - UDESLYl.COM</div>
      </div>

    </div>
    <div className="lower-footer">
      <ul className='footer-nav-links'>
        <li className='footer-nav-link'>News</li>
        <li className='footer-nav-link'>Contact</li>
        <li className='footer-nav-link'>Brand</li>
        <li className='footer-nav-link'>Licensing</li>
        <li className='footer-nav-link'>Privacy Policy</li>
        <li className='footer-nav-link'>Terms and Conditions</li>
        <li className='footer-nav-link'>Style Guide</li>
      </ul>

    </div>
  </FooterStyle>
  )
}

export default Footer