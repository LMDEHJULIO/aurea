import styled from "styled-components";

export const ProductPageStyle = styled.div`

    display: grid;
    grid-template-columns: 2rem auto 2rem;
    max-width: 2500px;
    padding-top: 5rem;
    grid-row-gap: 5rem;

    @media screen and (min-width: 745px){
        grid-template-columns: 5rem auto 5rem;
    }

    @media screen and (min-width: 2500px){
        margin: 0 auto;
    }   

    section {
        grid-column: 2;
    }

    .reviews-section, .other-products-section {
        grid-column: 1/4;
    }

    .product-content {
        // padding-top: 8rem;
    }

    /* .product-display {
        padding: 0 2rem;
    } */

    .details-section, .reviews-section{
        h2{
            font-size: 3rem;
            letter-spacing: 0.2rem;
            font-weight: 500;
            text-transform: uppercase;
        }
    }

    .reviews-section {
        .reviews {
            @media screen and (min-width: 1024px){
                width: 75%;
            }
        }
    }


    .details-section {
        


        
        @media screen and (min-width: 1024px){
            display: flex;
            justify-content: space-between;
       

            .details-summary {
                width: 50%;
            }
        }

        .product-detail-list {
            font-size: 1.8rem;
            font-weight: 300;
            padding-left: 2rem;

            li {
                
                color: grey;
                list-style-type: disc;
                &:not(:last-child) {
                    margin-bottom: 1rem;
                }
            }

        }
    }

    .details-summary{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 28rem;

        p {
            line-height: 3rem;
        }
    }

    .cards {


        @media screen and (min-width: 1024px){
            width: 50%;
        }

    }

    .detail-cards {
        display: grid;
        grid-gap: 4rem;
        margin: 0 auto;

        @media screen and (min-width: 1024px){
            width: min-content;
            grid-template-columns: repeat(2, auto);
            grid-gap: 2rem;
        }
    }

    .detail-card {
        background-color: white;
        min-height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 25rem;
        width: 100%;

        @media screen and (min-width: 1024px){
            height: 20rem;
            width: 20rem;

        }

        &__image {
            width: 4rem;
        }

        /* &:not(:last-child) {
            margin-bottom: 3.5rem;
        } */

        p {
            font-size: 1.5rem;
        }
    }

    .other-products-section {
        display: flex;
    


        .other-products-container {
            width: 100%;
            display: flex;
            flex-direction: column;

            @media screen and (min-width: 768px){
                flex-direction: row;
                flex-wrap: wrap;
            }
            .product-tile {

                width: 100%;

                @media screen and (min-width: 768px){
                    width: 50%;
                }

                @media screen and (min-width: 1200px){
                    width: 25%;
                }
                
            }
        }
    }
`
