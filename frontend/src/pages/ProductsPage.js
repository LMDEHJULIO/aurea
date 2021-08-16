import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import {addToCart, removeFromCart} from '../actions/cartActions';
import ProductTile from '../components/ProductTile';



const ProductPage = (props) => {
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

    // const checkoutHandler = (userInfo) => {
    //     if(userInfo){
    //       props.history.push('/shipping');
    //     }
    //     // props.history.push('/login?redirect=shipping');
    // }

    //Add to a button in order to add to cart

    return(
        loading ? <div>Loading ...</div> : 
        error ? <div>{error}</div> : 
        // clean this up
        <Fragment>
            <section className="product-display">
                <div className="product-display__grid">
                    <img src={product.image} className="product-display-img product-display-img--1"/>
                    <img src={product.image}  className="product-display-img product-display-img--2"/>
                    <img src={product.image}  className="product-display-img product-display-img--3"/>
                    <img src={product.image}  className="product-display-img product-display-img--4"/>
                </div>

                <div className="product-display__details">
                    <h2 className="product-heading">
                        Product
                    </h2>
                
                    <div className="product__price-desc">
                        <p className="price">${product.price}</p>
                        <p className="desc">Lorem ipsum dolor sit amet</p>
                    </div>
                    
                    <div className="product-display__color-selector">
                        <h5 className="color-heading">Color</h5>
                        <span className="product-color"></span>
                    </div>

                    <div className="product-display__cta">
                        <h2 className="product-cta-heading">Product 7</h2>
                        <p className="product-cta-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        
                        <div>

                            <form className="form--add-to-cart">
                                <input type="number" id="quantity" min="1" max={product.countInStock} value={qty} onChange={(e)=> setQty(e.target.value)} className="form--add-to-cart__input"/>

                                {product.countInStock > 0 && (
                                    <input type="submit" value="Add To Cart" className="btn-add-to-cart" onClick={handleAddToCart}/>
                                )}
                            </form>
                        
                        </div>
                    </div>
                </div>
            </section>

            <section className="details-section">
                <div>
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
                <div>
                    <div className="detail-card">
                        <img src="" alt=""/>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="detail-card">
                        <img src="" alt=""/>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="detail-card">
                        <img src="" alt=""/>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </section>

            <section className="reviews-section">
                <div>
                    <h2>Reviews</h2>
                </div>

                <div className="review-card">
                    <img src="" alt=""/>
                    <p>Reviewer on 3/2/19</p>
                    <p>
                        Suspendisse varius enim in eros elementum tristique. 
                        Duis cursus, mi quis viverra ornare, eros dolor 
                        interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                </div>

                <div className="review-card">
                    <img src="" alt=""/>
                    <p>Reviewer on 3/2/19</p>
                    <p>
                        Suspendisse varius enim in eros elementum tristique. 
                        Duis cursus, mi quis viverra ornare, eros dolor 
                        interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                </div>

                <div className="review-card">
                    <img src="" alt=""/>
                    <p>Reviewer on 3/2/19</p>
                    <p>
                        Suspendisse varius enim in eros elementum tristique. 
                        Duis cursus, mi quis viverra ornare, eros dolor 
                        interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                </div>
            </section>

            <section className="other-products-section">
                <div class="other-products-container">
                    <ProductTile/>
                    <ProductTile/>
                    <ProductTile/>
                    <ProductTile/>
                </div>
            </section>
        </Fragment>
    )
}

export default ProductPage