import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';
import Loading from '../components/Loading'; 
import Message from '../components/Message';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    const dispatch = useDispatch();
    
    const productList = useSelector(state => state.productList);

    const {loading, error, products} = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])
    
  return ( 
    <div>

        {
            loading ? <Loading></Loading>
            :
            error ? <Message>{error}</Message>
            :

            <div className="row center">
                {products.map((product) => (
                <Product key={product._id} product={product}></Product>
                ))}
          </div>
        }


    </div>
  );
}