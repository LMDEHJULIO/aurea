import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';


// import Nav from '../components/Nav';
import Hero from '../components/Hero';
import CtaBumper from '../components/CtaBumper';
import ProductCard from '../components/ProductCard';
import ProductGallery from '../components/ProductGallery';
import BlogList from '../components/BlogList';
import BlogCard from '../components/BlogCard';
import {listProducts} from '../actions/productActions';
import {listNews} from '../actions/newsActions';
import FullWidthBumper from '../components/FullWidthBumper';
import InstagramWall from '../components/InstagramWall';
import SubscribeForm from '../components/SubscribeForm';
import SliderBumper from '../components/SliderBumper';
import {SliderData, BumperData} from '../components/SliderData';


const HomePageStyle = styled.div`

  // HOME PAGE GRID
  max-width: 3500px;
  display: grid;
  grid-template-columns: 2rem auto 2rem;

  // SECTION/COMPONENT GRID FORMATTING

  .section-latest, .section-bumper, .full-width-bumper, .section-bumper--slider {
      grid-column: 1/4;
  }

  .section-products, .section-news, .section-social, .section-contact  {
    grid-column: 2;
  }

  // MARGIN DECLARATIONS

  .section-bumper, .section-social, .full-width-bumper, .section-news {
    margin-bottom: 7rem;
  }

  .section-products{
    margin-bottom: 10rem;
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
    margin-bottom: 5rem;
    

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
    margin: 7rem 0;

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

const HomePage = () => {

    const productList = useSelector(state => state.productList);

    const {products, loading, error} = productList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        dispatch(listNews())
      return () => {
        
      }
    }, [dispatch])

    // const products = [
    //     {productNum: 20, price: 150, img: '../../assets/img/chair.jpg'},
    //     {productNum: 19, price: 250, img: '../../assets/img/dining-table.jpg'},
    //     {productNum: 8, price: 250, img: '../../assets/img/tufted-couch.jpg'},
    //     {productNum: 7, price: 250, img: '../../assets/img/jenga.jpg'},
    //     {productNum: 6, price: 250, img: '../../assets/img/knit-ball.jpg'}
    // ]

    const bumperData = [
        {
            title: 'Furniture',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit varius in eros elementum tristique.',
            linkText: 'View the Collection',
        },
        {
            title: 'Objects',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit varius in eros elementum tristique.',
            linkText: 'View the Collection',
        },
        {
            title: 'Utility',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit varius in eros elementum tristique.',
            linkText: 'View the Collection',
        },
        {
          title: 'Varius Enim',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit varius in eros elementum tristique',
          linkText: 'View the Collection',
        },


    ]

    const blogData = [
        {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'},
        {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'},
        {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'}
    ]

  return (

    loading ? <div>Loading ...</div> : 
    error ? <div>{error}</div> : 

      <HomePageStyle className="homepage">
        {/* <SliderBumper slides={bumperData}/> */}

          <section className="section-latest">
            <Hero></Hero>
          </section>
            
          <section className="section-bumper"> 
            <CtaBumper textData={bumperData[0]} type="furniture" className="cta-bumper--furniture"/>
          </section>
          


          <section className="section-products">
            <ProductGallery>
                {products.slice(0, 5).map((item) => <ProductCard product={item}/>)}
            </ProductGallery>
          </section>

          <section className="section-bumper">
            <CtaBumper textData={bumperData[1]} type="objects"/>
          </section>

          <section className="section-news">
            <BlogList/>

            <a className="section-news__cta">Read all the news</a>
          </section>
            

 
            {/* <SliderBumper slides={BumperData}/> */}
          <section className="section-bumper--slider">
            <CtaBumper textData={bumperData[0]} isSlider slides={BumperData}/>
          </section>
            
          <section className="full-width-bumper">
            <FullWidthBumper/>
          </section>
            
          <section className="section-social">
            <InstagramWall/>
          </section>
            

          <section className="section-contact">
            <SubscribeForm/> 
          </section>

            

        
      </HomePageStyle>
  )
}

export default HomePage;