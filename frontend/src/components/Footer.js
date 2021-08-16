import React from 'react'
import styled from 'styled-components';

const FooterStyle = styled.footer`

    max-height: 51rem;
    display: flex;
    flex-direction: column;
  
    img {
      margin-bottom: 2.5rem;
      width: 10rem;
    }
  
    .credit-box {
      margin-bottom: 2rem;
  
      p:not(:last-child){
        margin-bottom: .5rem;
      }
    }
  
    .icons-container {
      display: flex;
      margin-bottom: 2rem;
    }
  
    .social-icons {
      border: solid 1px grey;
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
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
  
      &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
  
        @media screen and (min-width: 1024px){
          width: 100%;
          flex-direction: row;
  
        }
      }
    }
  
    .lower-footer {
      display: flex;
      flex-direction: column;
      flex: 4;
      background-color: black;
      padding: 4rem;
  
      @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-evenly;
      }
  
  
      
      li {
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
`

const Footer = () => {

  return (
    <FooterStyle>
    <div className="upper-footer">

      <img src={`${process.env.PUBLIC_URL}/assets/img/aurea-logo-white.svg`}></img>
      
      <div className="upper-footer__content">
        <div className="credit-box">
          <p>Developed by <span>Julio Rodriguez</span></p>
          <p>Designed by <span>Udesly</span></p>
        </div>
      
        <div class="icons-container">
          <div className="social-icons"></div>
          <div className="social-icons"></div>
          <div className="social-icons"></div>
        </div>

        <div>@COPYRIGHT 2020 - UDESLYl.COM</div>
      </div>

    </div>
    <div className="lower-footer">
      <li>News</li>
      <li>Contact</li>
      <li>Brand</li>
      <li>Licensing</li>
      <li>Privacy Policy</li>
      <li>Terms and Conditions</li>
      <li>Style Guide</li>
    </div>
  </FooterStyle>
  )
}

export default Footer