import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {addToCart, cartToggle, removeFromCart} from '../actions/cartActions';
import {GrClose} from 'react-icons/gr'
import { ImCart } from "react-icons/im";
import { CartBtnStyle, CartStyle } from './styles/CartBtnStyle';

export default function CartBtn(props) {

  const cart = useSelector((state) => state.cart);
  const isCartOpen = cart.cartVisible;
  const { cartItems } = cart;
  const dispatch = useDispatch();

  const handleCartToggle = () => dispatch(cartToggle());

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };

  return (

    isCartOpen ? 
    
    <CartStyle isOpen={isCartOpen} >
      <div className='cart-modal-background' onClick={handleCartToggle}></div>
      <div className='cart-body' >


        <div>
          <div className='cart-body__header'>
          <Link to='/' className="nav-logo__link"><img src="../../assets/img/aurea-logo.svg" className="nav-logo"/></Link>

            <a href="#" onClick={handleCartToggle} className='exit-link'><GrClose/></a>
          </div>


          <div className='cart-list-container'>
            <ul>

              
              { 
                cartItems.map((item) => (
                  
                  <li key={item.product} className='cart-item'>

                    <div className="cart-item__image">
                      <img
                        src={item.image}
                        alt={item.name}
                        // className="cart-item__image"
                      ></img>
                    </div>

                    <div className='cart-item__details'>
                      <h4>{item.name}</h4>
                      <p>{item.price}</p>
                    </div>

                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                      >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                      </select>
                  </li>
                ))
              }
            </ul>
          </div>

          
        </div>

        <div className='checkout-container'>
          <div className='checkout-total'>
            <p className='checkout-total__label'>Subtotal</p>

            <p className='checkout-total__amount'><span className='currency-symbol'>$</span>{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}<spam className="amount-denomination">USD</spam></p>
          </div>
          <Link className='checkout-button' to="/cart" onClick={handleCartToggle}>Continue to Checkout</Link>
        </div>
        
      </div>
      
    </CartStyle> : 

    <CartBtnStyle onClick={handleCartToggle}>
      <ImCart className="cart-icon"/>
    </CartBtnStyle>
  );
}
