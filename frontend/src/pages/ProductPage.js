import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import stlyed from 'styled-components';
import {Link} from 'react-router-dom';
import { detailsProduct, listProducts } from '../actions/productActions';
import {addToCart, removeFromCart} from '../actions/cartActions';
import ProductTile from '../components/ProductTile';
import styled from 'styled-components';
import ProductDetails from '../components/ProductDetails';
import ProductReviews from '../components/ProductReviews';

const ProductPageStyle = styled.div`

    display: grid;
    grid-template-columns: 5rem auto 5rem;
    max-width: 2500px;

    @media screen and (min-width: 2500px){
        margin: 0 auto;
    }   

    section {
        grid-column: 2;
    }

    .reviews-section, .other-products-section {
        grid-column: 1/4;
    }

    .product-content {
        // padding-top: 8rem;
    }

    /* .product-display {
        padding: 0 2rem;
    } */

    .details-section {


        
        @media screen and (min-width: 1024px){
            display: flex;
            justify-content: space-between;
       

            .details-summary {
                width: 50%;
            }
        }

        .product-detail-list {
            font-size: 1.8rem;
            font-weight: 300;
            padding-left: 2rem;

            li {
                
                color: grey;
                list-style-type: disc;
                &:not(:last-child) {
                    margin-bottom: 1rem;
                }
            }

        }
    }

    .details-summary{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 28rem;
    }

    .cards {


        @media screen and (min-width: 1024px){
            width: 50%;
        }

    }

    .detail-cards {
        display: grid;
        grid-gap: 4rem;
        margin: 0 auto;

        @media screen and (min-width: 1024px){
            width: min-content;
            grid-template-columns: repeat(2, auto);
            grid-gap: 2rem;
        }
    }

    .detail-card {
        background-color: white;
        min-height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 25rem;
        width: 100%;

        @media screen and (min-width: 1024px){
            height: 20rem;
            width: 20rem;

        }

        &__image {
            width: 4rem;
        }

        /* &:not(:last-child) {
            margin-bottom: 3.5rem;
        } */

        p {
            font-size: 1.5rem;
        }
    }

    .other-products-section {
        display: flex;
    


        .other-products-container {
            width: 100%;
            display: flex;
            flex-direction: column;

            @media screen and (min-width: 768px){
                flex-direction: row;
            }
            .product-tile {

                width: 100%;

                @media screen and (min-width: 768px){
                    width: 25%;
                }
                
            }
        }
    }
`


const ProductPage = (props) => {


    // const checkoutHandler = (userInfo) => {
    //     if(userInfo){
    //       props.history.push('/shipping');
    //     }
    //     // props.history.push('/login?redirect=shipping');
    // }

    //Add to a button in order to add to cart

    const productList = useSelector(state => state.productList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
      return () => {
        
      }
    }, [dispatch])

    const {products, loading, error} = productList;



    return(

        loading ? <div>Loading ...</div> : 
        error ? <div>{error}</div> : 

        // clean this up
        <ProductPageStyle>
            <ProductDetails props={props}/>

            <section className="details-section">
                <div className="details-summary">
                    <h2 className="heading-l w-500 upcase spacing-2">Details</h2>

                    <p className="paragraph-l w-500"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse varius enim in eros elementum tristique. Duis 
                        cursus, mi quis viverra ornare, eros dolor interdum Duis 
                        cursus, mi quis viverra ornare, eros dolor interdum
                    </p>

                    <ul className="product-detail-list">
                        <li className="product-detail-list-item">Lorem ipsum dolor sit amet, consectetur adipiscing eli</li>
                        <li className="product-detail-list-item">Suspendisse varius enim in eros elementum tristique.</li>
                        <li className="product-detail-list-item">Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</li>
                    </ul>
                </div>

                <div className="cards">
                    <div className="detail-cards">
                        <div className="detail-card">
                            <img src="https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab6a2d079ad4_creditcard.svg" className="detail-card__image" alt=""/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <div className="detail-card">
                            <img src="https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab7180079ae4_customerservice.svg" className="detail-card__image" alt=""/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <div className="detail-card">
                            <img src="https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab5b3d079ae5_fastshipping.svg" className="detail-card__image" alt=""/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>

            </section>

            <ProductReviews/>

            <section className="other-products-section">
                <div class="other-products-container">

                    {
                        products.slice(0,4).map(product => (
                            <ProductTile className="product-tile" product={product} key={product.name}/>
                        ))
                    }
                </div>
            </section>

        </ProductPageStyle>
    )
}

export default ProductPage