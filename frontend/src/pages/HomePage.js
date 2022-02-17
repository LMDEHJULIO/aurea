import React, {Fragment, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HomePageStyle } from '../components/styles/HomePage';
import Hero from '../components/Hero';
import CtaBumper from '../components/CtaBumper';
import ProductCard from '../components/ProductCard';
import ProductGallery from '../components/ProductGallery';
import BlogList from '../components/BlogList';
import {listProducts} from '../actions/productActions';
import {listNews} from '../actions/newsActions';
import FullWidthBumper from '../components/FullWidthBumper';
import InstagramWall from '../components/InstagramWall';
import SubscribeForm from '../components/SubscribeForm';
import {BumperData} from '../components/SliderData';
import { Link } from 'react-router-dom';


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
                {products.slice(0, 5).map((item) => <ProductCard product={item} key={item.name}/>)}
            </ProductGallery>
          </section>

          <section className="section-bumper">
            <CtaBumper textData={bumperData[1]} type="objects"/>
          </section>

          <section className="section-news">
            <BlogList/>

            <Link className="section-news__cta" to="/news">Read all the news</Link>
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