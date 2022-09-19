import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import {GrClose} from 'react-icons/gr'
import { MenuModalStyle } from './styles/MenuModalStyle';

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
      <MenuModalStyle className="menu-modal">
        <div className="menu-modal__content">

          {
            
            userInfo && (
         

              <div className="user-admin-controls">
                <h3>Admin Panel</h3>
                <ul className="user-links">

                  <li>
                    <Link to="/profile">{userInfo.name}</Link>
                  </li>

                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>

                  {
                    userInfo.isAdmin && (
                      <>                      
                        <li>
                          <Link to="/productlist" onClick={props.toggleMenu}>Products</Link>
                        </li>
                        <li>
                          <Link to="/orderlist" onClick={props.toggleMenu}>Orders</Link>
                        </li>
                        <li>
                          <Link to="/newsList" onClick={props.toggleMenu}>News</Link>
                        </li>
                      </>
                    )
                  }


                </ul>
              </div>
            
            ) 
            }
                      
            <div className="exit-nav">
                <a href="#" onClick={props.toggleMenu} className="exit-nav__button"><GrClose/></a>
            </div>
            
            <div className="menu-modal__links">


                <h3 className="home-link"><a>/Home</a></h3>
                <ul className="link-list">
                    <li className="link-list__item"><Link to="/collection" onClick={props.toggleMenu}>Collection</Link></li>
                    <li className="link-list__item"><Link to="/brand" onClick={props.toggleMenu}>Brand</Link></li>
                    <li className="link-list__item"><Link to="/inspiration" onClick={props.toggleMenu}>Inspiration</Link></li>
                    <li className="link-list__item"><Link to="/news" onClick={props.toggleMenu}>News</Link></li>
                    <li className="link-list__item"><Link to="/contact" onClick={props.toggleMenu}>Contact</Link></li>
                    {!userInfo && (
                      <li className="link-list__item"><Link to="/signin" onClick={props.toggleMenu}>Sign In</Link></li>
                    )}
                    
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

          
      </MenuModalStyle>
  )
}

export default MenuModal