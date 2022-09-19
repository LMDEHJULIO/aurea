import styled from "styled-components";

export const ProductTileStyle = styled.div`
    min-height: 40rem;
    padding: 3rem;
    border: solid #80808014 1px;



    .product-tile__content {
      background-image: url('${props => props.img}');
      background-size: cover;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
     

      .details-overlay {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 1s;
        background-color: var(--main-bg-color);

        &:hover{
          opacity: 500;
        }

        &__name {
          color: grey;
          font-weight: 400;
        }

        &__price {
          color: #d60808;
          margin-bottom: 2rem;
        }



      .title-box__cta{
        display: flex;
        align-items: center;
        margin-bottom: 3rem;
        font-weight: 600;
  
        @media screen and (min-width: 991px){
          margin-bottom: 6rem;
        }
  
        &-arrow {
          border: solid 1px grey;
          min-width: 5rem;
          min-height: 5rem;
          border-radius: 100%;
          display: inline-block;
          margin-right: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
  
          img {
            width: 1.8rem;
          }
        }
  
      }
       
      a {
        text-transform: uppercase;
        color: #d60808;
        font-size: 1.5rem;
        letter-spacing: .2rem;
        line-height: 1.5rem;
      }
      }

    }


`