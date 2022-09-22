import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart, saveShippingAddress } from '../actions/cartActions';
import MessageBox from '../components/Message';
import { CartPageStyle, CartPageItem, SectionStyle } from '../components/styles/CartPage';
import PaymentMethodPage from './PaymentMethodPage';
import ShippingAddressSection from './ShippingAddressSection';
import {FaPaypal} from "react-icons/fa"
import { TiDelete } from "react-icons/ti";
import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';

export default function Cart(props) {

  const dispatch = useDispatch();

  // Get user info from store. If no user, push to signin page 
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    if (!userInfo) {
      props.history.push('/signin');
    }
  
  // Get cart info. 

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const productId = props.match.params.id;
    const qty = props.location.search
                ? Number(props.location.search.split('=')[1])
                : 1;

    // Get create order state & create placeOrderHandler

    const orderCreate = useSelector((state) => state.orderCreate);

    const { loading, success, error, order } = orderCreate;

    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12

    // Price & tax details for order placement 
    
    cart.itemsPrice = toPrice(
      cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );

    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);

    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    const placeOrderHandler = () => {
      dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    };



    const removeFromCartHandler = (id) => {
        // delete action
        dispatch(removeFromCart(id));
      };;
    
      const checkoutHandler = (props) => {
        // props.history.push('/signin?redirect=shipping');
        props.history.push('/placeorder');
      };



    // Use Effect for AddToCart 

    useEffect(() => {
        if (productId) {
        dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    //Use Effect for Creating an Order

    useEffect(() => {
      if (success) {
        props.history.push(`/order/${order._id}`);
        dispatch({ type: ORDER_CREATE_RESET });
      }
    }, [dispatch, order, props.history, success]);



    return (
    <CartPageStyle className="cart-page" >
      <h1 className='cart-page__heading'>Your Cart</h1>

      <p className='cart-page__warning'>Before checkout, let's double check your cart items.</p>

      <div>
        


        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.product} className="cart-list__item">
                <CartPageItem>
                
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item__image"
                    ></img>

                    <div className='cart-item__details'>
                      <div>
                        <Link to={`/product/${item.product}`} className='cart-item__item-name'>{item.name}</Link>
                        <p>${item.price}</p>
                      </div>

                      <div className='qty-and-delete'>
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
                  
                    
                        <TiDelete className='delete-btn' onClick={() => removeFromCartHandler(item.product)}/>
                     
                      </div>
                    </div>
               
                </CartPageItem>
              </li>

            ))}
          </ul>
        )}
      </div>

        <div className="cart-page__sub-total">
          
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
        </div>

        <section className="checkout-section">
          <ShippingAddressSection/>
        </section>                  
       
        {/* <section className="checkout-section">
          <PaymentMethodPage/>

    

            <FaPaypal/>
            <p>Checkout will be managed via PayPal.</p>
            <p>Don't have an account? Just checkout with your credit card when prompted.</p>
 
        </section> */}
        

        {/* <Link
          to='/placeorder'
          // onClick={checkoutHandler}
          disabled={cartItems.length === 0}
          >
          Proceed to Shipping
        </Link> */}

        <div className='place-order'>
          <button
            onClick={placeOrderHandler}
            className="place-order-btn"
            disabled={cart.cartItems.length === 0}
            >
            Continue to Order
          </button>
        </div>

 
    </CartPageStyle>



  
  );
}