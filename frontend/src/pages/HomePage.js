import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';


// import Nav from '../components/Nav';
import Hero from '../components/Hero';
import CtaBumper from '../components/CtaBumper';
import ProductCard from '../components/ProductCard';
import ProductGallery from '../components/ProductGallery';
// import BlogList from '../components/BlogList';
// import BlogCard from '../components/BlogCard';
import {listProducts} from '../actions/productActions';
// import {listNews} from '../../actions/newsActions';
import FullWidthBumper from '../components/FullWidthBumper';
import InstagramWall from '../components/InstagramWall';
import SubscribeForm from '../components/SubscribeForm';
import SliderBumper from '../components/SliderBumper';
// import {SliderData} from '../components/SliderData';


const HomePageStyle = styled.div`

.section-latest {
  height: 40rem;
  margin-bottom: 5rem;
  

  @media screen and (min-width: 767px)  {
    height: 100vh;
  }

  @media screen and (min-width: 991px)  {
    padding: 8rem;
  }

}

.hero-slider {
  background-image: url("../../assets/img/latest-couch.jpg");
  background-size: cover;
  background-position: center;
  height: 100%;
  padding: 11rem 4rem 3rem 4rem;
  margin-bottom: 3rem; 

  @media screen and (min-width: 767px) {
    // height: 100vh;
    padding: 11rem 4rem 10rem 4rem;
    background-position: 95%; 
  } 

  @media screen and (min-width: 991px) {
    padding: 11rem 4rem 10rem 16rem;
  }
  
  @media screen and (min-width: 1024px) {
    background-position: 98.4%;
    padding: 11rem 4rem 10rem 14.4rem;
  }
  

  .title-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: white;
    width: 58%;

    

    &__category {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 400;
      letter-spacing: .1rem;
    }

    &__heading {
      margin-bottom: 2.8rem;
      font-weight: 400;
      font-size: 5.5vw;
      // letter-spacing: .05rem;

      @media screen and (min-width: 375px){
        margin-bottom: 1.8rem;
      }

      @media screen and (min-width: 768px) {
        font-size: 2vw;
     }

      // @media screen and (min-width: 991px) {
      //    font-size: 2vw;
      // }
    }

    &__cta{
      display: flex;
      align-items: center;
      margin-bottom: 3rem;
      font-weight: 600;

      @media screen and (min-width: 991px){
        margin-bottom: 6rem;
      }

      &-arrow {
        border: solid 1px grey;
        width: 5rem;
        height: 5rem;
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


  .slider-links {
      
    .slider-dots {
      background-color: grey;
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
      margin-right: .5rem;

      &:active {

      }
    }
  }

}

.section-products {
  @media screen and (min-width: 768px) {
    padding: 6rem;
  }
}


.product-gallery {
  padding: 1rem;
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
  padding: 2rem;

  @media screen and (min-width: 768px) {
    padding: 6rem;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 35px 35px;
      grid-template-areas:
        ". ."
        ". .";
  }

  @media screen and (min-width: 1024px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 2.5rem 4rem;
    grid-template-areas:
      ". . .";
  }
}


.section-social {
  padding: 9rem 0;
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
  padding: 2rem;
  text-align: center;

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

footer {
  max-height: 51rem;
  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 2.5rem;
    width: 10rem;
  }

  .credit-box {
    margin-bottom: 2rem;

    p:not(:last-child){
      margin-bottom: .5rem;
    }
  }

  .icons-container {
    display: flex;
    margin-bottom: 2rem;
  }

  .social-icons {
    border: solid 1px grey;
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }

  .upper-footer{
    flex: 3;
    background-color: #0e0e0e;
    text-align: center;
    color: grey;
    font-size: 1.2rem;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    min-height: 25rem;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      @media screen and (min-width: 1024px){
        width: 100%;
        flex-direction: row;

      }
    }
  }

  .lower-footer {
    display: flex;
    flex-direction: column;
    flex: 4;
    background-color: black;
    padding: 4rem;

    @media screen and (min-width: 768px){
      flex-direction: row;
      justify-content: space-evenly;
    }


    
    li {
      color: #848383;
      list-style: none;
      text-align: center;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 500;
    
      &:not(:last-child){
        margin-bottom: 2rem;
      }
    }
  }
}

`

const HomePage = () => {

    const productList = useSelector(state => state.productList);
    // const newsList = useSelector(state => state.newsList);

    const {products, loading, error} = productList;
    // const {news, loading: newsLoading, error: newsError} = newsList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        // dispatch(listNews())
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
        }

    ]

    const blogData = [
        {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'},
        {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'},
        {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'}
    ]

  return (

    loading ? <div>Loading ...</div> : 
    error ? <div>{error}</div> : 

      <div className="homepage">
        {/* <SliderBumper slides={bumperData}/> */}
          <section className="section-latest">
            <Hero></Hero>
          </section>
            

          <CtaBumper textData={bumperData[0]} type="furniture"/>

          <section className="section-products">
            <ProductGallery>
                {products.map((item) => <ProductCard product={item}/>)}
            </ProductGallery>
          </section>


            <CtaBumper textData={bumperData[1]} type="objects"/>

            {/* <BlogList>
                {news.filter((i,index) => index < 3).map((blog) => <BlogCard blogText={blog}/>)}
            </BlogList> */}

            <a>Read all the news</a>
 
            <CtaBumper textData={bumperData[2]}/>

            <FullWidthBumper/>

            <InstagramWall/>

            <SubscribeForm/> 

            

        
      </div>
  )
}

export default HomePage;