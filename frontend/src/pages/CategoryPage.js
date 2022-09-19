import React, { useEffect } from 'react';
import { Fragment } from 'react';
import {Link, useDispatch, useSelector} from 'react-redux';
import {listProducts} from '../actions/productActions';
import ProductTile from '../components/ProductTile';
import { CategoryPageStyle } from './styles/CategoryPageStyle';




const CategoryPage = (props) => {
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        loading ? <div>Loading ...</div> : 
        error ? <div>{error}</div> : 

        <CategoryPageStyle>
            <section className="product-gallery">
                {
                    products.map(product => {
                        return (
                            <ProductTile product={product} className="product-tile" key={product._id}/>
                        )
                    })
                }


                


            </section>
        </CategoryPageStyle>
    )


}

export default CategoryPage