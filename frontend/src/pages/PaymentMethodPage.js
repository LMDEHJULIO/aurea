import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import {FaPaypal} from "react-icons/fa"

export default function PaymentMethodPage(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  // if (!shippingAddress.address) {
  //   props.history.push('/shipping');
  // }
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
  };
  useEffect(()=> {
    dispatch(savePaymentMethod('PayPal'))
  },[])
  return (
          <div>

            <FaPaypal/>

            <p>Checkout will be managed via PayPal.</p>
            <p>Don't have an account? Just checkout with your credit card when prompted.</p>
          </div>

      /* <form className="form" onBlur={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input> 
            <label htmlFor="paypal" className='paypal-checkout'><FaPaypal/></label>
            <p>Checkout will be managed via PayPal.</p>
            <p>Don't have an account? Just checkout with your credit card when prompted.</p>
          </div>
        </div>
         <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div> 
      </form> */
    
  );
}