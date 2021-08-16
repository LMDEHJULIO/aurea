import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import {Link} from 'react-router-dom'

const MenuModal = (props) => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
      dispatch(signout());
    };
  

  return (
      <div className="menu-modal">

          
          <div className="menu-modal__content">
            
            <div className="exit-nav">
                <a href="#" onClick={props.toggleMenu} className="exit-nav__button">x</a>
            </div>
            
            <div className="menu-modal__links">
                <h3 className="home-link"><a>/Home</a></h3>
                <ul className="link-list">
                    <li className="link-list__item"><a>Collection</a></li>
                    <li className="link-list__item"><a>Brand</a></li>
                    <li className="link-list__item"><a>Inspiration</a></li>
                    <li className="link-list__item"><a>News</a></li>
                    <li className="link-list__item"><a>Contact</a></li>
                </ul>

                <ul className="hidden-list">
                    <li><a>Furniture</a></li>
                    <li><a>Objects</a></li>
                </ul>

                <div className="fact-links">
                    <ul className="fact-links__list">
                        <li className="fact-links__list-items"><a>Licensing</a></li>
                        <li className="fact-links__list-items"><a>Privacy Policy</a></li>
                        <li className="fact-links__list-items"><a>Terms and Conditions</a></li>
                    </ul>
                </div>
            </div>


          </div>

        <div className="menu-modal__social-links">

        </div>

          
      </div>
  )
}

export default MenuModal