import styled from "styled-components";

export const InstagramWallStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 1vw;
    margin-top: 4rem;

    @media screen and (min-width: 998px){
        max-width: 63%;
        margin: 4rem auto;
    }



    .social-gallery__item {
        flex-basis: 50%; 
        position: relative;

        @media screen and (min-width: 768px) {
            flex-basis: 25%;
        }

        &:nth-child(n+7){
            display: none;
            @media screen and (min-width: 768px){
                display: block;
                
            }
        }



        a {
            width: 100%;
            height: 100%;
        }

        img {
            width: inherit;
            height: inherit;
            transition: all .01s;

            &::after {
                display: inline-block;
                display: inline-block;
                width: 2rem;
                height: 2rem;
                content: url(/assets/img/insta-icon.svg);
                font-size: 1em;
                position: absolute;
                z-index: 1;
                left: 85%;
                top: 0.5rem;
        
            }
            

            &:hover {
                filter: brightness(0.7);
            }


        }
    }

`
