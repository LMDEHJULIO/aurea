import {applyMiddleware, createStore, compose, combineReducers} from 'redux'; 
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { newsCreateReducer, newsDeleteReducer, newsDetailsReducer, newsListReducer, newsSaveReducer, newsUpdateReducer } from './reducers/newsReducer';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderMineListReducer, orderListReducer, orderDeleteReducer, orderDeliverReducer,} from './reducers/orderReducer';
import {productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productUpdateReducer} from './reducers/productReducers';
import { userRegisterReducer, userSigninReducer, userDetailsReducer, userUpdateProfileReducer, } from './reducers/userReducer';


const initialState = {
    cart: {
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
      shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
      paymentMethod: 'PayPal',
    },
    userSignin: {
      userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    
  };

  const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderDeliver: orderDeliverReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    newsList: newsListReducer,
    newsCreate: newsCreateReducer,
    newsDelete: newsDeleteReducer,
    newsSave: newsSaveReducer,
    newsDetails: newsDetailsReducer,
    newsUpdate: newsUpdateReducer,
  });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk))); 

export default store; 