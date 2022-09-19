import styled from "styled-components"

export const ContactCardStyle = styled.div`

    display: flex;
    flex-direction: column;
   

    .shop-image {
        background-image: url('${ (props) => props.image}');
        background-size: cover;
        height: 40rem;
    }

    .shop-details {
        background-color: black;
        color: white;
        padding: 2rem;
    }

    @media screen and (min-width: 1000px){
        flex-direction: row;


        
        .shop-image{ 
            width: 70%;
            min-height: 63rem;
        }

        .shop-details {
            width: auto;
            width: 30%;
        }
    }
`

export const ContactPageStyle = styled.div`
    display: grid;
    max-width: 1800px;
    padding: 6rem 0;

    @media screen and (min-width: 1801px){
        margin: 0 auto;
    }



    .inspiration-content {
        max-width: 1500px;
        margin: 0 auto;
        display: grid;
        grid-column: 2;
        grid-column-gap: 4rem;
    
    }

    .contact-cards {
        display: flex;
        flex-direction: column;
        gap: 5rem;
    }

    @media screen and (min-width: 550px){
        grid-template-columns: 2rem auto 2rem;

        .inspiration-content {
            max-width: 1500px;
            margin: 0 auto;
            display: grid;
            grid-column: 2;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 4rem;
    
        }

        .contact-cards {
            grid-column: 2;
        }
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
    
        }

        .contact-cards {
            display: flex;
            flex-direction: column;
            gap: 10rem;
        }
    }



`