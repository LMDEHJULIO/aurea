import styled from "styled-components";

export const MenuModalStyle = styled.div`

    // display: none;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: fixed; 
    z-index: 9999;
    background-image: url(../../../assets/img/menu-background.jpg);
    background-size: cover;
    display: flex;
    flex-direction: column;

    a:visited, a:link, a:active {
        color: black;
    }


    .user-admin-controls, .user-info, .user-links, .admin-options__list {
      display: flex;
      color: white;
    }

    .user-admin-controls {
      background-color: black;
      padding: 2rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      
      a:visited, a:link, a:active {
        color: white;
      }
      
    }

    .user-links {

      width: 100%;
      justify-content: space-around;
      flex-wrap: wrap;

      @media screen and (min-width: 756px){
        width: 25%;
      }

      li {
        text-align: center;
        font-size: 1.5rem;
        width: 33.33%;
      }
    }
  
    .exit-nav {
      padding: 2rem;
      display: flex;
      justify-content: flex-end;

      &__button {
        font-size: 2.2rem;
      }
    }
  
    .menu-modal__content {
      height: 100%;
      width: 100%;
      background-color: rgba(255, 255, 255, .84);
  
    }
  
    .menu-modal__links {
      padding: 3rem 3rem;   
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }
  
    .home-link {
      margin-bottom: 2rem;
      text-transform: uppercase;
    }
  
    .link-list {
      &__item {
        font-size: 2.5rem;
        margin-bottom: 7rem;
        &:not(:last-child) {
          margin-bottom: 1rem;
        }

        @media screen and (min-width: 1200px){
          font-size: 2vw;
        }
      }
    }
  
    .hidden-list {
      display: none;
    }
  
    .fact-links {
      
      
      &__list-items {
        text-transform: uppercase;
        font-size: 1.4rem;
  
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
  
    }
  
    .menu-modal__social-links {
      height: 10rem;
      width: 100%;
      background-color: black;

      
    }

    .sign-in-link {
      position: relative;
      top: 2%;
      left: 1%;

      span{
        margin-left: 1rem;
        color: cadetblue;
        
      }
    }

`