import React from 'react'
import {FaFacebookSquare,
FaInstagram,
FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { FooterStyle } from './styles/FooterStyle';



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
        <li><Link to="/news" className='footer-nav-link'>News</Link></li>
        <li><Link to="/contact" className='footer-nav-link'>Contact</Link></li>
        <li><Link to="/brand" className='footer-nav-link'>Brand</Link></li>
        <li><Link to="#" className='footer-nav-link'>Licensing</Link></li>
        <li><Link to="#" className='footer-nav-link'>Privacy Policy</Link></li>
        <li><Link to="#" className='footer-nav-link'>Terms and Conditions</Link></li>
      </ul>

    </div>
  </FooterStyle>
  )
}

export default Footer