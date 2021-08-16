import React from 'react';
import {Link} from 'react-router-dom';


const ProductTile = ({product}) => {
  console.log(product)
  return (
    <div className="product-tile" >
        <div className="product-tile__content" style={{backgroundImage: `url('${product.image}')`}}>
            <h3>product #</h3>
            <h4>{product.price}</h4>

            <Link to={`product/${product._id}`}>View More</Link>
        </div>
    </div>
  )
}

export default ProductTile