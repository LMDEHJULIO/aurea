import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ProductTileStyle = styled.div`

.product-tile {
    min-height: 40rem;
    padding: 2.5rem;
    border: solid #80808014 1px;


    &__content {
        background-image: url("../../assets/img/latest-couch.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
} 

`


const ProductTile = ({product}) => {
  console.log(product)
  return (
    <ProductTileStyle>
      <div className="product-tile" >
          <div className="product-tile__content" > 
              <h3>product #</h3>
              {/* <h4>{product.price}</h4> */}

              {/* <Link to={`product/${product._id}`}>View More</Link> */}
          </div>
      </div>
    </ProductTileStyle>
  )
}

// style={{backgroundImage: `url('${product.image}')`}}

export default ProductTile