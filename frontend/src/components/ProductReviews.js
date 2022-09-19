import React from 'react';
import {IoMdStar} from 'react-icons/io';
import { ProductReviewStyle } from './styles/ProductReviewStyle';



const ReviewStars = ({count}) => {

    return (
        [...Array(count)].map((star, index) => <IoMdStar key={index}/>)
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