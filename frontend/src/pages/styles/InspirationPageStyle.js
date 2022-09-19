import styled from "styled-components";

export const InspirationPageStyle = styled.div`

    display: grid;
    grid-template-columns: 2rem auto 2rem;
    padding: 6rem 0;

    .inspiration-col {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .inspiration-content {
        max-width: 1500px;
        margin: 0 auto;
        display: grid;
        grid-column: 2;
        grid-template-columns: auto;
        
    }

    @media screen and (min-width: 768px){
        grid-template-columns: 8rem auto 8rem;

        .inspiration-content {
            max-width: 1500px;
            margin: 0 auto;
            display: grid;
            grid-column: 2;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 4rem;
            padding-top: 8rem;
        }

        .inspiration-col-1 {
            gap: 5rem;
            padding-top: 5rem;
        }
        .inspiration-col-2 {
            gap: 6rem;
        }
    }



`