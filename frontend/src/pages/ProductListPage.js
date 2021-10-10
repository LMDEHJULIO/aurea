import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  createProduct,
  deleteProduct,
  listProducts,
} from '../actions/productActions';
import Loading from '../components/Loading';
import MessageBox from '../components/Message';
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
} from '../constants/productConstants';

export const ProductListTable = styled.table`



  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  grid-column: 2;

  /* Force table to not be like tables anymore */
  table, thead, tbody, th, td, tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    margin: 0 0 1rem 0;
  }
    
  tr:nth-child(odd) {
    background: #ccc;
  }
  
  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
    overflow-wrap: break-word;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 0;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }

  
  td:nth-of-type(1):before { content: "ID"; }
  td:nth-of-type(2):before { content: "Product Name"; }
  td:nth-of-type(3):before { content: "Price"; }
  td:nth-of-type(4):before { content: "Category"; }
  td:nth-of-type(5):before { content: "Brand"; }
  td:nth-of-type(6):before { content: "Action"; }
  /* td:nth-of-type(7):before { content: "Date of Birth"; }
  td:nth-of-type(8):before { content: "Dream Vacation City"; }
  td:nth-of-type(9):before { content: "GPA"; }
  td:nth-of-type(10):before { content: "Arbitrary Data"; } */
    

`

const ProductListPageStyle = styled.div`
  padding-top: 3rem;
  grid-template-columns: 3rem auto 3rem;

  header {
    grid-column: 2;
    margin-bottom: 2rem;
    text-align: center;
  }
  @media screen and (min-width: 768px){
    display: grid;
    grid-template-columns: 3rem auto 3rem;
    max-width: 1800px;
    margin: 0 auto;
  }

`

export default function ProductListPage(props) {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push(`/product/${createdProduct._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(listProducts());
  }, [createdProduct, dispatch, props.history, successCreate, successDelete]);

  const deleteHandler = (product) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteProduct(product._id));
    }
  };
  const createHandler = () => {
    dispatch(createProduct());
  };
  return (
    <ProductListPageStyle>
      <header>
        <h1>Products</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create Product
        </button>
      </header>

      {loadingDelete && <Loading></Loading>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <Loading></Loading>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <ProductListTable className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() =>
                      props.history.push(`/product/${product._id}/edit`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductListTable>
      )}
    </ProductListPageStyle>
  );
}