import React from 'react';
import styled from 'styled-components'
import {IoMdStar} from 'react-icons/io'

const ProductReviewStyle = styled.section`

    background-color: white;

    @media screen and (min-width: 1024px){
        display: flex;
        justify-content: space-between;
        padding: 10rem 6rem;
    }

.review-card {
    background-color: white;
    border-bottom: solid #e6e6e6 1px;
    min-height: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1.5rem;
    padding: 2rem;
}

.reviewer-identity{
    color: grey;
    font-size: 1.8rem;
}

.review-stars {
    font-size: 2.5rem;
}

/* .review-text {
    font-size: 1.8rem;
} */

`

const ReviewStars = ({count}) => {

    return (
        [...Array(count)].map(star => <IoMdStar/>)
    )
}

const ProductReview = () => { 
    return (
        <div className="review-card">
        <div className="review-stars">
            <ReviewStars count={5}/>
        </div>
        

        <p className="reviewer-identity">Reviewer on 3/2/19</p>
        <p className="review-text">
            Suspendisse varius enim in eros elementum tristique. 
            Duis cursus, mi quis viverra ornare, eros dolor 
            interdum nulla, ut commodo diam libero vitae erat.
        </p>
    </div>
    )
}

const ProductReviews = () => {


    return (
        <ProductReviewStyle className="reviews-section">
        <div>
            <h2>Reviews</h2>
        </div>

        <div className="reviews">
            <ProductReview/>
            <ProductReview/>
            <ProductReview/>
        </div>

    </ProductReviewStyle>
    )
}

export default ProductReviews