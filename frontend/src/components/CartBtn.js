import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {addToCart, cartToggle, removeFromCart} from '../actions/cartActions';
import {GrClose} from 'react-icons/gr'
import { ImCart } from "react-icons/im";

const CartBtnStyle = styled.button`
    width: 5rem;
    height: 5rem;
    background-color: transparent;
    border: solid 1px #c1c1c1;
    position: fixed;
    right: 0;
    margin-right: 1rem;
    border-radius: 100%;
    margin-top: 2rem;
    z-index:999;
    display: none;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1024px){
      display: flex;
    }

    transition: background 1s;
    .cart-icon {
      fill: #c1c1c1;
      font-size: 1.8rem;
  
    }

    &:hover {
      background-color: black;
      cursor: pointer;

      .cart-icon {
        fill: white;
      }
    }
`

const CartStyle = styled.div`

 
  opacity: ${(props) => props.isOpen ? 100 : 0}%;

  height: 100vh;
  background-color: #000000a1;
  color: white;
  position: fixed;
  z-index: 999;
  transition: width opacity 1000s;
  display: flex;


  .cart-modal-background {
    width: ${(props) => props.isOpen ? 99 : 0}vw
    /* height: 100vh; */
  }
  .cart-body {
    display: flex;
    flex-direction: column;
    color: black;
    background-color: white;
    width: 100%;
    height: 100vh;
    position: absolute;
    right: 0;

    &__header {
      border-bottom: solid 1px #eaeaea;
      padding: 1.5rem;
      display: flex;
      justify-content: space-between; 
      align-items: center;

      .nav-logo__link img {
        width: 10rem;
      }

      .exit-link {
        

        path {
          stroke-width: 3.5;
        }
      }
    }

    @media screen and (min-width: 1024px){
      width: 487px;
    }

    .cart-item {
      display: flex;

      &__details {
        margin-left: 1.5rem;
        margin-right: auto
      }

      select {
        background-color: #f5f4f4;
        border: solid 1px lightgrey;
        width: 5rem;
        border-radius: 4px;
        padding-left: 1rem;
      }
    }

    .cart-list-container {
      padding: 1.5rem;
      
      ul {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }

    .cart-item__image {
      width: 80px;
    }
  }

  .checkout-container {
    border-top: solid 1px #eaeaea; 
    width: 100%;
    padding: 2rem;
    margin-top: auto;
    display: flex;
    flex-direction: column;

    .checkout-total {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;

      .currency-symbol {
        margin-right: .5rem;
      }
      .amount-denomination {
        margin-left: .5rem;
      }

      &__amount{
        font-weight: bold;
      }
    }

    .checkout-button {
      border: solid 1px black;
      width: 100%;
      padding: 1rem;
      text-align: center;
      :visited {
        color: black;
      }
    }
  }

`


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
                        className="cart-item__image"
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
