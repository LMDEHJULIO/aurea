import React, { useEffect } from 'react';
import { Fragment } from 'react';
import {Link, useDispatch, useSelector} from 'react-redux';
import {listProducts} from '../actions/productActions';
import ProductTile from '../components/ProductTile';

const CategoryPage = (props) => {
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, []);

    const counterArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    return (
        loading ? <div>Loading ...</div> : 
        error ? <div>{error}</div> : 

        <Fragment>
            <section className="categoryGallery">
                {
                    products.map(product => {
                        return (
                            <ProductTile product={product}/>
                        )
                    })
                }


                


            </section>
        </Fragment>
    )


}

export default CategoryPage