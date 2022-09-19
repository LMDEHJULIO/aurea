import styled from "styled-components";

export const NewsPageStyle = styled.div`

    padding: 2rem 0;
    grid-template-columns: 2rem auto 2rem;
    display: grid;

    @media screen and (min-width: 450px){
        padding: 6rem 0;
        grid-template-columns: 4rem auto 4rem;
    }
    

    .inspiration-content {
        display: grid;
        grid-column: 2;
        grid-template-columns: auto;
        grid-gap: 3rem;
        max-width: 108.2rem;
        margin: 0 auto;


        @media screen and (min-width: 577px){
            grid-template-columns: 1fr 1fr;
        }
        
        @media screen and (min-width: 1024px){
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 3rem;
        }
    }

`