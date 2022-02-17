import styled from 'styled-components';

export const OrderPageStyle = styled.div`

    max-width: 2400px;
    display: grid;
    justify-content: center;
    gap: 4rem;
    margin: 0 auto;
    padding: 5rem 2rem;

    .main-heading {
        font-size: 2rem;
        text-align: center;

        @media screen and (min-width: 745px){
            font-size: 3.5rem;
        }

    }

    .order-status {
        background-color: black;
        padding: 1rem;
        margin-top: 1rem;
        color: white;
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

export const OrderPageSection = styled.section`

    h2 {
        text-align: center;
        margin-bottom: 3rem;
    }

    border-bottom: solid 1px grey; 
    padding: 2rem 0;
    margin-bottom: 2rem;

    p {
        line-height: 2.4rem;
    }
`