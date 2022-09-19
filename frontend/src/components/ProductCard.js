import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCardStyle } from './styles/ProductCardStyle';




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