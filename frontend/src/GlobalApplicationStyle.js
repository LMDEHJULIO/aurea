import styled from "styled-components";

export const GlobalApplicationStyle = styled.div`



body {
   font-family: 'IBM Plex Sans', 'sans-serif';
   /* font-size: 1.6rem; */
 }

 /* *,
 *::after,
 *::before {
   margin: 0;
   padding: 0;
   box-sizing: inherit;
 } */



 position: relative;
 
   /* padding-top: 8.5rem; */
   display: grid;
   /* grid-template-columns: 10rem 1fr; // testing */
   grid-template-areas:
     'nav'
     'main'
     'footer';
   grid-template-columns: 1fr;
   grid-template-rows: 7rem auto auto;

   nav {
     grid-area: nav;
   }

   main {
     grid-area: main;
     min-height: 100vh;  
   }

   footer {
     grid-area: footer;
   }


   @media screen and (min-width: 991px) {
     flex-grow: 1;
     grid-template-columns: 10rem 1fr;
     grid-template-rows: auto;

     main {

       grid-column: 2/3;
       /* max-width: 2400px; */
       


       @media screen and (min-width: 2000px) {
         /* margin: 0 auto; */
       }
     }

     footer {
       grid-column: 2/3
     }
   } 
   
  

`