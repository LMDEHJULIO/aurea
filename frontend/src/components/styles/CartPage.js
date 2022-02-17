import styled from 'styled-components';
import ShippingAddressSection from '../../pages/ShippingAddressSection';

export const CartPageStyle = styled.div`

    max-width: 2400px;
    display: grid;
    justify-content: center;
    gap: 4rem;
    margin: 0 auto;
    padding-top:5rem;

    .cart-list{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        width: 100%;
        /* width: min-content; */
        padding: 0 2rem;
        justify-self: center;

        @media screen and (min-width: 745px){
            width: min-content;
        }
    }

    h1, .cart-page__warning {
        text-align: center;

    }
    
    .cart-page__sub-total {
        text-align: center;
        h2{font-weight: 400;}
    }

    input[type=radio] {
        display: none;
    }

    .paypal-checkout {
        font-size: 5rem;
        text-align: center;
        fill: #0053af;
    }

    .shipping-input {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        width: 100%;
        align-items: center;
        

        input {
            padding: 1rem;
            letter-spacing: 0.15rem;
            text-transform: uppercase;
            border: none;
            color: white;
            background-color: black;
            border-radius: 0rem;
            text-align: center;
        }
    }

    .checkout-section {
        padding-top: 3rem;
        border-top: solid 1px #dbdbdb;
        display: flex;
        justify-content: center;
        width: 100%;

        form {
        width: 100%;
        label{
            margin-bottom: 1rem;
        }

        input[type=text] {
            width: 50%;
        }
    }
    }

    .place-order {
        border-top: solid 1px #dbdbdb;
        padding-top: 4rem;
        display: flex;
        align-items: center;
    }
    
    .place-order-btn {
        background-color: #3bdb5af0;
        color: white;
        width: 65%;
        margin: 0 auto;
        padding: 1rem;
        border: none;
        border-radius: 100rem;
        font-size: 1.5rem;
    }

    .main-heading {
        font-size: 1.5rem;

        @media screen and (min-width: 745px){
            font-size: 3.5rem;
        }

    }

    .order-item {
      
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
     

     .order-item__image {
         width: 115px;
         margin-right: 2rem;

         @media screen and (min-width: 745px){
             width: 180px;
         }
     }
 }

    .order-qty {
         display: flex;
         justify-content: space-between;
     }

     .order-total {
        background-color: black;
        color: white;
        display: flex;
        justify-content: space-between;
        padding: 2rem;
     }

`

export const CartPageItem = styled.div`
    display: flex;
    flex-direction: column;
    
    .cart-item__image {
        width: 100%;
        border-radius: 4px;
        margin-bottom:2rem;
        max-width: 550px;

        @media screen and (min-width: 745px){
            width: 550px;
        }
    }

    .cart-item__details {
        display: flex;
        justify-content: space-between;
    }

    .cart-item__item-name {
        font-weight: 500;
        
        &:visited {
            color: black;
            text-decoration: none;
        }
    }

    .qty-and-delete {
        display: flex;
        align-items: center;
    }

    select {
        text-align: center;
        background-color: #f5f4f4;
        width: 5rem;
        border: none;
        border-bottom: solid 2px grey;
        padding-bottom: 1rem;
        margin-right: 1rem;
     
    }
    
    .delete-btn {
        height: 100%;
        fill: black;
        font-size: 2.5rem;
    }


`

export const SectionStyle = styled.section`

    padding-top: 3rem;
    border-top: solid 1px #dbdbdb;
    display: flex;
    justify-content: center;
    width: 100%;

    form {
        width: 100%;
        label{
            margin-bottom: 1rem;
        }

        input[type=text] {
            width: 50%;
        }
    }


    h1 {
        margin-bottom: 3rem;
    }

`