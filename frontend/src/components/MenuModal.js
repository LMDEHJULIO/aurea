import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import {GrClose} from 'react-icons/gr'

const MenuModalStyle = styled.div`

    // display: none;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: fixed; 
    z-index: 999;
    background-image: url(../../assets/img/menu-background.jpg);
    background-size: cover;
    display: flex;
    flex-direction: column;

    a:visited, a:link, a:active {
        color: black;
    }


    .user-admin-controls, .user-info, .user-links, .admin-options__list {
      display: flex;
      color: white;
    }

    .user-admin-controls {
      background-color: black;
      padding: 2rem;
      display: flex;
      justify-content: center;

      
      a:visited, a:link, a:active {
        color: white;
      }
      
    }

    .user-links {

      width: 100%;
      justify-content: space-around;
      flex-wrap: wrap;

      @media screen and (min-width: 756px){
        width: 25%;
      }

      li {
        text-align: center;
        font-size: 1.5rem;
        width: 33.33%;
      }
    }
  
    .exit-nav {
      padding: 2rem;
      display: flex;
      justify-content: flex-end;

      &__button {
        font-size: 2.2rem;
      }
    }
  
    .menu-modal__content {
      height: 100%;
      width: 100%;
      background-color: rgba(255, 255, 255, .84);
  
    }
  
    .menu-modal__links {
      padding: 3rem 3rem;   
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }
  
    .home-link {
      margin-bottom: 2rem;
      text-transform: uppercase;
    }
  
    .link-list {
      &__item {
        font-size: 2.5rem;
        margin-bottom: 7rem;
        &:not(:last-child) {
          margin-bottom: 1rem;
        }

        @media screen and (min-width: 1200px){
          font-size: 2vw;
        }
      }
    }
  
    .hidden-list {
      display: none;
    }
  
    .fact-links {
      
      
      &__list-items {
        text-transform: uppercase;
        font-size: 1.4rem;
  
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
  
    }
  
    .menu-modal__social-links {
      height: 10rem;
      width: 100%;
      background-color: black;

      
    }

`
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

        {userInfo && (
              <div className="user-admin-controls">
                <Link to="#">
                  {userInfo.name}
                </Link>

                
                
                <ul className="user-links">

                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>

                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li> 
                </ul>
              </div>
            ) 
            
            ||
            
            userInfo && userInfo.isAdmin ? (
         

              <div className="user-admin-controls">


              
              
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

                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            
            ) : (
              <Link to="/signin">Sign In</Link>
            ) 
            }
              
          
 
          
            {/* <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link> */}
 


            
            <div className="exit-nav">
                <a href="#" onClick={props.toggleMenu} className="exit-nav__button"><GrClose/></a>
            </div>
            
            <div className="menu-modal__links">


                <h3 className="home-link"><a>/Home</a></h3>
                <ul className="link-list">
                    <li className="link-list__item"><Link to="/category" onClick={props.toggleMenu}>Collection</Link></li>
                    <li className="link-list__item"><Link to="/brand" onClick={props.toggleMenu}>Brand</Link></li>
                    <li className="link-list__item"><Link to="/inspiration" onClick={props.toggleMenu}>Inspiration</Link></li>
                    <li className="link-list__item"><Link to="/news" onClick={props.toggleMenu}>News</Link></li>
                    <li className="link-list__item"><Link to="/contact" onClick={props.toggleMenu}>Contact</Link></li>
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

          
      </MenuModalStyle>
  )
}

export default MenuModal