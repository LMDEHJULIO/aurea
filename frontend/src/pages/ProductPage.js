import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import stlyed from "styled-components";
import { Link } from "react-router-dom";
import { detailsProduct, listProducts } from "../actions/productActions";
import { addToCart, removeFromCart } from "../actions/cartActions";
import ProductTile from "../components/ProductTile";
import styled from "styled-components";
import ProductDetails from "../components/ProductDetails";
import ProductReviews from "../components/ProductReviews";
import { ProductPageStyle } from "./styles/ProductPageStyle";

const ProductPage = (props) => {

  const productList = useSelector((state) => state.productList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    return () => {};
  }, [dispatch]);

  const { products, loading, error } = productList;

  return loading ? (
    <div>Loading ...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    // clean this up
    <ProductPageStyle>
      <ProductDetails props={props} />

      <section className="details-section">
        <div className="details-summary">
          <h2 className="heading-l w-500 upcase spacing-2">Details</h2>

          <p className="paragraph-l w-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum Duis cursus, mi quis viverra
            ornare, eros dolor interdum
          </p>

          <ul className="product-detail-list">
            <li className="product-detail-list-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli
            </li>
            <li className="product-detail-list-item">
              Suspendisse varius enim in eros elementum tristique.
            </li>
            <li className="product-detail-list-item">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
            </li>
          </ul>
        </div>

        <div className="cards">
          <div className="detail-cards">
            <div className="detail-card">
              <img
                src="https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab6a2d079ad4_creditcard.svg"
                className="detail-card__image"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="detail-card">
              <img
                src="https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab7180079ae4_customerservice.svg"
                className="detail-card__image"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="detail-card">
              <img
                src="https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab5b3d079ae5_fastshipping.svg"
                className="detail-card__image"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </section>

      <ProductReviews />

      <section className="other-products-section">
        <div className="other-products-container">
          {products.slice(0, 4).map((product) => (
            <ProductTile
              className="product-tile"
              product={product}
              key={product.name}
            />
          ))}
        </div>
      </section>
    </ProductPageStyle>
  );
};

export default ProductPage;
