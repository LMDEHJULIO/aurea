import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, cartToggle } from '../actions/cartActions';
import { detailsProduct } from '../actions/productActions';
import { ProductDetailsStyle } from './styles/ProductDetailsStyle';



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
        e.preventDefault();

        dispatch(addToCart(productId, qty));
        dispatch(cartToggle());


    }


    return (
        loading ? <div>Loading ...</div> : 
        error ? <div>{error}</div> : 

        <ProductDetailsStyle className="product-display">
        <div className="product-display__grid">
            <img src={product.image} sizes="(max-width: 479px) 92vw, (max-width: 767px) 84vw, (max-width: 991px) 96vw, 54vw" className="product-display-img product-display-img--1"/>
            <img src={product.image}  sizes="(max-width: 479px) 92vw, (max-width: 767px) 84vw, (max-width: 991px) 96vw, 54vw" className="product-display-img product-display-img--2"/>
            <img src={product.image}  sizes="(max-width: 479px) 92vw, (max-width: 767px) 84vw, (max-width: 991px) 96vw, 54vw" className="product-display-img product-display-img--3"/>
            <img src={product.image}  sizes="(max-width: 479px) 92vw, (max-width: 767px) 84vw, (max-width: 991px) 96vw, 54vw" className="product-display-img product-display-img--4"/>
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
                        

                        {product.countInStock > 0 ? (
                            <>

                                <input type="number" id="quantity" min="1" inputMode="numeric" max={product.countInStock} value={qty} onChange={(e)=> setQty(e.target.value)} className="form--add-to-cart__input"/>

                                <input type="submit" value="Add To Cart" className="btn-add-to-cart" onClick={handleAddToCart}/>

                            </>
                        )
                        : 
                        ( <p>Product not in stock.</p>)
                    }
                    </form>
                
                </div>
            </div>
        </div>
    </ProductDetailsStyle>
    )
}

export default ProductDetails