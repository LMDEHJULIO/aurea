import styled from "styled-components";

export const ProductDetailsStyle = styled.section`


    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px){
    }

    @media screen and (min-width: 1024px){
        flex-direction: row;
    }

    .product-display__grid {

        display: grid;
        /* height: 170vw; */
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 1fr);
        gap: 1.5rem 1.5rem;
        grid-template-areas: "full-1 full-1"
                            "half-1 half-2"
                            "full-2 full-2"
                            "full-2 full-2";


        width: 100%;
        margin-bottom: 2rem;

        @media screen and (min-width: 1024px){
            /* height: 100vh; */
            width: 50%;
        }
    }

    .product-display-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;

        @media screen and (min-width: 1024px) {
            /* height:425px; */
        }

        &--1 {
            grid-area: full-1;
        }
        &--2 {
            grid-area: half-1;
            object-fit: none;
            object-position: left;
        }
        &--3 {
            grid-area: half-2;
            object-fit: none;
        }
        &--4 {
            grid-area: full-2;
        }
    }

    .product-display__details {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        min-height: 40rem;

        @media screen and (min-width: 1024px){
            padding: 0 5vw;
        }

        .detail-group {

            @media screen and (min-width: 1024px){
                height: 15rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
        }


        .product-heading{
            text-transform: uppercase;
            font-size: 5vw; 

            @media screen and (min-width: 1024px){
                font-size: 2vw;
            }
        }

        .product__price-desc {
            display: flex;
            font-size: 1.5rem;

            .price {
                margin-right: 2rem;
            }

            .desc {
                color: #cecece;
            }
        }

        .product-display__color-selector {
            .color-heading {
                font-size: 1.5rem;
                font-weight: 300;
            }

            .product-color {
                height: 3rem;
                width: 3rem;
                background-color: tan;
                display: block;
                border-radius: 100%;
            }
        }

        .product-display__cta {
            background-color: white;
            min-height: 22rem;
            padding: 2.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-content: stretch;
            justify-items: inherit;
            align-items: flex-start;

            .product-cta-subheading {
                font-size: 1.5rem;
                color: grey
            }


            h2 {
                font-size: 2rem;
            }
        }


    }

    .btn-add-to-cart { 
        background-color: black;
        padding: 1.5rem 3.5rem;
        border: none;
        color: white;
    }

    .form--add-to-cart {
        display: flex;
        
        input[type=number] {
            padding: 1.5rem;
            background-color: #eaeaea;
            border: none;
            margin-right: 1rem;
        }
    }

`