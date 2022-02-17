import styled from 'styled-components';

export const HomePageStyle = styled.div`

  // HOME PAGE GRID
  max-width: 3500px;
  display: grid;
  grid-template-columns: 2rem auto 2rem;
  grid-row-gap: 10rem;

  // SECTION/COMPONENT GRID FORMATTING

  .section-latest, .section-bumper, .full-width-bumper, .section-bumper--slider {
      grid-column: 1/4;
  }

  .section-products, .section-news, .section-social, .section-contact  {
    grid-column: 2;
  }

  // MARGIN DECLARATIONS

  .section-bumper, .section-social, .full-width-bumper, .section-news {
    /* margin-bottom: 7rem; */
  }

  .section-products{
    /* margin-bottom: 10rem; */
  }


  @media screen and (min-width: 375px){

  }

  @media screen and (min-width: 425px){

  }

  @media screen and (min-width: 768px){
    grid-template-columns: 6rem auto 6rem;

    .section-bumper, .section-bumper--slider {
      grid-column: 2;
    }
  }

  @media screen and (min-width: 991px){
    display: grid;
    grid-template-columns: 8rem auto 8rem;
    grid-template-areas: "gutter-left main gutter-right";

    .section-latest {
      grid-column: 2;
    }


  }

  @media screen and (min-width: 2000px){
    margin: 0 auto;
  }

  .section-latest {
    height: 40rem;
    /* margin-bottom: 5rem; */
    

    @media screen and (min-width: 767px)  {
      height: 100vh;
    }

    @media screen and (min-width: 991px)  {
      padding: 8rem 0;
    
    }

  }


  }

  .section-products {
    @media screen and (min-width: 768px) {
      /* padding: 6rem; */
    }
  }


  .product-gallery {
    /* padding: 1rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (min-width: 1043px) {
    
        display: grid;
        min-height: 70rem;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 19px 20px;
        grid-template-areas:
          "1 2 3"
          "4 5 6";

          .product-gallery__item:first-child{
            grid-column: 1 / span 2;
          }

          /* .product-gallery__item {
            height: 100%;
          } */
      
    }
  }

  .section-news{
    /* padding: 2rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    &__cta {
      grid-column: 2;
      border: solid 1px #d6d6d6;
      width: fit-content;
      justify-self: center;
      padding: 2rem 4rem;
    }


    @media screen and (min-width: 768px) {
      /* padding: 6rem; */

        /* display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 35px 35px;
        grid-template-areas:
          ". ."
          ". ."; */
    }

    @media screen and (min-width: 1024px){
      /* grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 2.5rem 4rem;
      grid-template-areas:
        ". . ."; */
    }
  }


  .section-social {
    /* padding: 9rem 0; */
    text-align: center;

    @media screen and (min-width: 2560px){
      padding: 9rem 45rem;
    }
    
    span {
      background-color: #b31414;
      height: .2rem;
      width: 4rem;
      margin-bottom: 4rem; 
      display: block;
      margin: 0 auto;
    }

    .section-social__heading {
      text-align: center;
      font-size: 3.5rem;
      font-weight: 500;
      margin-top: 2rem;
    }
  }

  .section-contact{
    /* padding: 2rem; */
    text-align: center;
    /* margin: 7rem 0; */

    h2 {
      font-size: 3rem;
      margin-bottom: 4rem;
      font-weight: 500;
    }

    h3{
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: .16rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
    }
  }


`