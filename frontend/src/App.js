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
import NewsPage from './pages/NewsPage.js';
import NewsEditPage from './pages/NewsEditPage.js';
import InspirationPage from './pages/InspirationPage.js';
import ContactPage from './pages/ContactPage.js';
import BrandPage from './pages/BrandPage.js';
import CartBtn from './components/CartBtn.js';

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

  const breakpoints = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tab: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

  const device = {
    mobileS: `(min-width: ${breakpoints.mobileS})`,
    mobileM: `(min-width: ${breakpoints.mobileM})`,
    mobileL: `(min-width: ${breakpoints.mobileL})`,
    tablet: `(min-width: ${breakpoints.tablet})`,
    laptop: `(min-width: ${breakpoints.laptop})`,
    laptopL: `(min-width: ${breakpoints.laptopL})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
    desktopL: `(min-width: ${breakpoints.desktop})`
  };

  const GlobalApplicationStyle = styled.div`



   /* body {
      font-family: 'IBM Plex Sans', 'sans-serif';
    } */

    h1, h2, h3, h4, p, a, li, table{
      font-family: 'IBM Plex Sans', 'sans-serif';
    }

    position: relative;
    
      /* padding-top: 8.5rem; */
      display: grid;
      /* grid-template-columns: 10rem 1fr; // testing */
      grid-template-areas:
        'nav'
        'main'
        'footer';
      grid-template-columns: 1fr;
      grid-template-rows: 7rem auto auto;

      nav {
        grid-area: nav;
      }

      main {
        grid-area: main;
      }

      footer {
        grid-area: footer;
      }


      @media screen and (min-width: 991px) {
        flex-grow: 1;
        grid-template-columns: 10rem 1fr;
        grid-template-rows: auto;

        main {

          grid-column: 2/3;
          /* max-width: 2400px; */
          min-height: 1800px;


          @media screen and (min-width: 2000px) {
            /* margin: 0 auto; */
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

        <CartBtn/>

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
              path={process.env.PUBLIC_URL + '/news'}
              component={NewsPage}
            />

            <Route
              exact
              path={process.env.PUBLIC_URL + '/inspiration'}
              component={InspirationPage}
            />

          <Route
            exact
            path={process.env.PUBLIC_URL + '/news/:id/edit'}
            component={NewsEditPage}
          />


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

            <Route
              exact
              path={process.env.PUBLIC_URL + '/contact'}
              component={ContactPage}
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

          <Route
            path="/brand"
            component={BrandPage}
            exact
          ></Route>

        </main>
        <Footer/>
      </GlobalApplicationStyle>
    </BrowserRouter>
  );
}

export default App;