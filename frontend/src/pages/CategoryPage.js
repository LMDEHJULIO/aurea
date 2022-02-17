import React, { useEffect } from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
import {Link, useDispatch, useSelector} from 'react-redux';
import {listProducts} from '../actions/productActions';
import ProductTile from '../components/ProductTile';


const CategoryPageStyle = styled.div`

    .product-gallery {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;

        @media screen and (min-width: 768px){
            grid-template-columns: 1fr 1fr;

            .product-tile:first-child {
                grid-column: 1/span 2;
            }
        }

        @media screen and (min-width: 1500px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        gap: 0px 0px;
        grid-template-areas:
            "top top. ."
            "top top . ."
            ". . . ."
            ". . . .";
            // ". . . .";

            .product-tile:first-child {
                grid-area: top;
            }
        } 
    }






`

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