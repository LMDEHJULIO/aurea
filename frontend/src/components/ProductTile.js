import React from 'react';
import {Link} from 'react-router-dom';
import { ProductTileStyle } from './styles/ProductTileStyle';




const ProductTile = ({product, className}) => {



  return (
    <ProductTileStyle className={className} img={product.image}>
          <div className="product-tile__content" > 

            <div className="details-overlay">

              <h3 className="details-overlay__name">{product.name}</h3>

              <h3 className="details-overlay__price">${product.price}</h3>

              <Link className="title-box__cta" to={`/product/${product._id}`}>
                <div className="title-box__cta-arrow"><img src={`${process.env.PUBLIC_URL}/assets/img/product-link-arrow.svg`}/></div>
                <span className="title-box__cta-link title-box__item" to="/news">View More</span> 
              </Link>
            </div>
          </div>
    </ProductTileStyle>
  )
}

export default ProductTile