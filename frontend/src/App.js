import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Cart from './pages/CartPage.js';
import SigninScreen from './pages/SigninPage';
import { signout } from './actions/userActions';
import RegisterPage from './pages/RegisterPage';
import ShippingAddressPage from './pages/ShippingAddressPage';
import PaymentMethodPage from './pages/PaymentMethodPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderScreen from './pages/OrderScreen';
import OrderHistoryPage from './pages/OrderHistoryPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './pages/PrivateRoute';
import AdminRoute from './pages/AdminRoute';
import ProductListPage from './pages/ProductListPage';
import ProductEditPage from './pages/ProductEditPage';
import OrderListPage from './pages/OrderListPage';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';

// import Footer from './Footer';

function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const GlobalApplicationStyle = styled.div`
    
      /* padding-top: 8.5rem; */
      display: grid;
      /* grid-template-columns: 10rem 1fr; // testing */
      grid-template-areas:
        'header'
        'main'
        'footer';
      grid-template-columns: 1fr;


      @media screen and (min-width: 991px) {
        flex-grow: 1;
        grid-template-columns: 10rem 1fr;

        main {
          grid-column: 2/3;
          max-width: 2400px;
          @media screen and (min-width: 2000px) {
            margin: 0 auto;
          }
        }

        footer {
          grid-column: 2/3
        }
      } 
      
     

  `
  
  return (
    <BrowserRouter>
      <GlobalApplicationStyle>

        <Nav/>

        <main>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/cart/:id?" component={Cart}></Route>
          <Route path="/product/:id" component={ProductPage} exact></Route>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/shipping" component={ShippingAddressPage}></Route>
          <Route path="/payment" component={PaymentMethodPage}></Route>
          <Route path="/placeorder" component={PlaceOrderPage}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryPage}></Route>
          <Route
              exact
              path='/products'
              component={ProductsPage}
            />

            <Route
              exact
              path={process.env.PUBLIC_URL + '/category'}
              component={CategoryPage}
            />

          <PrivateRoute
            path="/profile"
            component={ProfilePage}
          ></PrivateRoute>

          <AdminRoute
            path="/productlist"
            component={ProductListPage}
          ></AdminRoute>

          <AdminRoute
            path="/orderlist"
            component={OrderListPage}
          ></AdminRoute>

          <Route
            path="/product/:id/edit"
            component={ProductEditPage}
            exact
          ></Route>
        </main>
        <Footer/>
      </GlobalApplicationStyle>
    </BrowserRouter>
  );
}

export default App;