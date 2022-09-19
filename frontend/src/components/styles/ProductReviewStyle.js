import styled from "styled-components";

export const ProductReviewStyle = styled.section`

    background-color: white;
    padding: 10rem 2rem;

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