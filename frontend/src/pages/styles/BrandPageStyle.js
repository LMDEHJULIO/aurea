import styled from "styled-components";

export const BrandPageStyle = styled.div`



    display: grid;
    grid-template-columns: 7% auto 7%;
    grid-row-gap: 8rem;
    padding-bottom: 18rem;
    

    section {
        grid-column: 2;
    }

    .hero-video {
        grid-column: 1/-1;
        height: 100vh;

        video {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    .img-bumper {
        img {
            width: 100%;
        }
    }

    .content-bumper {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        @media screen and (min-width: 768px){
            width: 70%;
            margin: 0 auto;
        }


  
        span {
        background-color: red;
        width: 4rem;
        height: .2rem;
        display: block;
        }

        h3{
            font-weight: 500;
            font-size: 2rem;
        }

        p {
            font-size: 1.6rem;
            line-height: 2;
        }

    }

    .team-grid {
        display: grid;
        grid-template-columns: auto;
        column-gap: 2rem;
        row-gap: 4rem;

        @media screen and (min-width: 1000px){
            grid-template-columns: auto auto auto;

            .image-team{
                width: 100%;
            }

            .team-image-1 {
                grid-column: 1;
            }

            .team-image-2 {
                grid-column: 2;
                grid-row: 2;
            }

            .team-image-3 {
                grid-column: 3;
                grid-row: 1;
            }
        }
    }



`