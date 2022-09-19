import styled from "styled-components";

export const CategoryPageStyle = styled.div`

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