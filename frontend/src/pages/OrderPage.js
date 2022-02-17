import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deliverOrder, detailsOrder, payOrder } from '../actions/orderActions';
import Loading from '../components/Loading';
import MessageBox from '../components/Message';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../constants/orderConstants';
import { CartPageStyle, SectionStyle, CartPageItem } from '../components/styles/CartPage';
import {OrderPageStyle, OrderPageSection} from '../components/styles/OrderPage'


export default function OrderPage(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const orderPay = useSelector((state) => state.orderPay);

  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);

  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;

  const dispatch = useDispatch();
  
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (
      !order ||
      successPay ||
      successDeliver ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, order, orderId, sdkReady, successPay, successDeliver]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };

  return loading ? (
    <Loading></Loading>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <OrderPageStyle>

      <h1 className='main-heading'>Order {order._id}</h1>

      <div className="">
        <div className="">
     

              <OrderPageSection className="">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <p className="order-status">
                    Delivered at {order.deliveredAt}
                  </p>
                ) : (
                  <p className="order-status">Not Delivered</p>
                )}
            </OrderPageSection>

   
              <OrderPageSection className="">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <p className="order-status">
                    Paid at {order.paidAt}
                  </p>
                ) : (
                  <p className="order-status">Not Paid</p>
                )}
              </OrderPageSection>
      
              <OrderPageSection className="">
                <h2>Order Items</h2>

                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.product}>
                      <div  className="order-item">
                     
                          <img
                            src={item.image}
                            alt={item.name}
                            className="order-item__image"
                          ></img>
                        
                        <div>
                       
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                      

                          <p>
                            {item.qty} x ${item.price} = ${item.qty * item.price}
                          </p>
                          
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </OrderPageSection>
           
        
        </div>

        
          <OrderPageSection className="">

            <h2>Order Summary</h2>
            <ul>

              <li>
                <div className="order-qty">
                  <h4>Items</h4>
                  <p>${order.itemsPrice.toFixed(2)}</p>
                </div>
              </li>

              <li>
                <div className="order-qty">
                  <h4>Shipping</h4>
                  <div>${order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>

              <li>
                <div className="order-qty">
                  <h4>Tax</h4>
                  <div>${order.taxPrice.toFixed(2)}</div>
                </div>
              </li>

              <li>
                <div className="order-total">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>${order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>


              {!order.isPaid && (
                <li>
                  {!sdkReady ? (
                    <Loading></Loading>
                  ) : (
                    <>
                      {errorPay && (
                        <MessageBox variant="danger">{errorPay}</MessageBox>
                      )}
                      {loadingPay && <Loading></Loading>}

                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      ></PayPalButton>
                    </>
                  )}
                </li>
              )}

              {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                <li>
                  {loadingDeliver && <Loading></Loading>}
                  {errorDeliver && (
                    <MessageBox variant="danger">{errorDeliver}</MessageBox>
                  )}
                  <button
                    type="button"
                    className=""
                    onClick={deliverHandler}
                  >
                    Deliver Order
                  </button>
                </li>
              )}
            </ul>
          </OrderPageSection>
        
      </div>
    </OrderPageStyle>
  );
}