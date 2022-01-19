import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { addToCart } from '../actions/cartActions';
import { detailsProduct } from '../actions/productActions';

const ProductDetailsStyle = styled.section`


    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px){
    }

    @media screen and (min-width: 1024px){
        flex-direction: row;
    }

    .product-display__grid {
    // display: grid;
    // grid-auto-rows: minmax(10rem, auto);
    // grid-template-columns: repeat(2, 1fr);
    // grid-template-areas: "full-1 full-1"
    //                      "half-1 half-2"
    //                      "full-2 full-2"
    //                      "full-2 full-2";
    // grid-gap: 1.5rem;

    display: grid;
    height: 170vw;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 2fr 4fr;
    gap: 15px 15px;
    grid-template-areas: "full-1 full-1"
                         "half-1 half-2"
                         "full-2 full-2"
                         "full-2 full-2";


    width: 100%;
    margin-bottom: 2rem;

    @media screen and (min-width: 1024px){
        height: 100vh;
        width: 50%;
    }
    }

    .product-display-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;

        &--1 {
            grid-area: full-1;
        }
        &--2 {
            grid-area: half-1;
            object-fit: none;
            object-position: left;
        }
        &--3 {
            grid-area: half-2;
            object-fit: none;
        }
        &--4 {
            grid-area: full-2;
        }
    }

    .product-display__details {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        min-height: 40rem;

        @media screen and (min-width: 1024px){
            padding: 0 5vw;
        }

        .detail-group {

            @media screen and (min-width: 1024px){
                height: 15rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
        }


        .product-heading{
            text-transform: uppercase; 
        }

        .product__price-desc {
            display: flex;
            font-size: 1.5rem;

            .price {
                margin-right: 2rem;
            }

            .desc {
                color: #cecece;
            }
        }

        .product-display__color-selector {
            .color-heading {
                font-size: 1.5rem;
                font-weight: 300;
            }

            .product-color {
                height: 3rem;
                width: 3rem;
                background-color: tan;
                display: block;
                border-radius: 100%;
            }
        }

        .product-display__cta {
            background-color: white;
            min-height: 22rem;
            padding: 3.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-content: stretch;
            justify-items: inherit;
            align-items: flex-start;

            .product-cta-subheading {
                font-size: 1.5rem;
                color: grey
            }


            h2 {
                font-size: 2rem;
            }
        }


    }



`

const ProductDetails = ({props}) => {

    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const productId = props.match.params.id;
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
   

    useEffect(() => {
        dispatch(detailsProduct(productId))

    }, [dispatch, productId]);

    const handleAddToCart = (e) => {
        e.preventDefault()

        // props.history.push(`/cart/${productId}?qty=${qty}`)
        dispatch(addToCart(productId, qty))
        props.onAddToCart();
    }


    return (
        loading ? <div>Loading ...</div> : 
        error ? <div>{error}</div> : 

        <ProductDetailsStyle className="product-display">
        <div className="product-display__grid">
            <img src={product.image} className="product-display-img product-display-img--1"/>
            <img src={product.image}  className="product-display-img product-display-img--2"/>
            <img src={product.image}  className="product-display-img product-display-img--3"/>
            <img src={product.image}  className="product-display-img product-display-img--4"/>
        </div>

        <div className="product-display__details">

            <div className="detail-group">
                <h2 className="product-heading">
                    {product.name}
                </h2>
            
                <div className="product__price-desc">
                    <p className="price">{product.price}</p>
                    <p className="desc">Lorem ipsum dolor sit amet</p>
                </div>

                <div className="product-display__color-selector">
                    <h5 className="color-heading">Color</h5>
                    <span className="product-color"></span>
                </div>

            </div>

            

            <div className="product-display__cta">
                <h2 className="product-cta-heading">Product 7</h2>
                <p className="product-cta-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
                <div>

                    <form className="form--add-to-cart">
                        

                        {product.countInStock > 0 && (
                            <>

                                <input type="number" id="quantity" min="1" max={product.countInStock} value={qty} onChange={(e)=> setQty(e.target.value)} className="form--add-to-cart__input"/>

                                <input type="submit" value="Add To Cart" className="btn-add-to-cart" onClick={handleAddToCart}/>

                            </>
                        )}
                    </form>
                
                </div>
            </div>
        </div>
    </ProductDetailsStyle>
    )
}

export default ProductDetails