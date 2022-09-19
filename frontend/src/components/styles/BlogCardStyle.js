import styled from "styled-components";

export const BlogCardStyle = styled.div`

    display: flex;
    flex-direction: column;
    /* height: 50rem; */
    -webkit-box-shadow: 0px 4px 5px 2px rgba(186,186,186,0.85);
    -moz-box-shadow: 0px 4px 5px 2px rgba(186,186,186,0.85);
    box-shadow: 0px 4px 5px 2px rgba(186,186,186,0.85);
    height: 44rem;
  
    /* @media screen and (min-width: 1024px){
      height: 44rem;
    } */
  
  
    /* &:not(:last-child){
      margin-bottom: 3rem;
  
      @media screen and (min-width: 768px) {
        margin-bottom: 0;
      }
    } */
  
    .card__img-container {
      height: 40%;
    
      background-size: cover;
  
      img {
        width: 100%;
        height: 100%;
      }
    }
  
  
  
  
  
    .card__content {
      height: 60%;
      padding: 4rem;
      background-color: white;
      font-size: 2rem;
      flex-direction: column;
      display: flex;
      
  
      span {
        background-color: #b31414;
        height: .2rem;
        width: 14%;
        margin-bottom: 3rem;
      }
  
      h3{
  
        font-weight: 500;
        font-size: 2rem;
        color: #151515;
  
      }
  
      h4 {
        font-weight: 500;
        color: #ca304d;
        font-size: 1.6rem;
        margin-top: auto;
      }
  
    }

`