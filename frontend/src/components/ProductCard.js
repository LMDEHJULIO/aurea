import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductCardStyle = styled.div`

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 2rem;
    background-size: cover;
    width: 100%;
    height: 32rem;
    position: relative;
    background-size: cover;
    background-position: center;
    margin-bottom: 2rem;

    @media screen and (min-width: 1100px){
      margin-bottom: 0;
    }

    @media screen and (min-width: 1500px){
      height: 52rem;
    }
  
    // &:not(:last-child) {
    //   margin-bottom: 5rem;
    // }
  
    .price-box {
      background-color: rgba(124, 124, 124, 0.42);
      padding: 1rem;
      font-family: sans-serif;
      width: min-content;
  
      h3 {
        color: white;
        font-size: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
      }
  
      h5 {
        color: red;
        font-size: 1.4rem;
        font-weight: 100; 
      }
    }
  
    a {
      // font-size: 2rem;
      // background-color: tras;
      // border: solid 1px #b5b5b5;
      // color: #b5b5b5;
      // padding: 1rem;
      // border-radius: 100rem;
        border: solid 1px grey;
        width: 5rem;
        height: 5rem;
        border-radius: 100%;
        display: inline-block;
        margin-right: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
  
        img {
          width: 1.8rem;
        }
  
    }
    
  

`


const ProductCard = ({product}) => {

  return (
    <ProductCardStyle className="product-gallery__item item-1" style={{backgroundImage: `url('${product.image}')`}}>
        <div className="price-box">
          <h3>
            {product.name}
          </h3>

          <h5>${product.price}</h5>
        </div>

        <Link to={`/product/${product._id}`} className="title-box__cta-arrow"><img src={`${process.env.PUBLIC_URL}/assets/img/product-link-arrow.svg`}/></Link>
    
    </ProductCardStyle>
  )
}

export default ProductCard