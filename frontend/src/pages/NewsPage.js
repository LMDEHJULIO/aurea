import React, {Fragment, useEffect} from 'react';
import Nav from '../components/Nav'
import styled from 'styled-components';
import BlogList from '../components/BlogList';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import {listNews} from '../actions/newsActions';
import { useDispatch, useSelector } from 'react-redux';

const blogData = [
    {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'},
    {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'},
    {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'},
    {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'},
    {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'},
    {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'},
    {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'},
    {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'},
    {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'},
    {title: '5 Cool Interior Design Trends', date: 'March 2, 2020', cta: 'Read all the news'}
]


const NewsPageStyle = styled.div`

    padding: 2rem 0;
    grid-template-columns: 2rem auto 2rem;
    display: grid;

    @media screen and (min-width: 450px){
        padding: 6rem 0;
        grid-template-columns: 4rem auto 4rem;
    }
    

    .inspiration-content {
        display: grid;
        grid-column: 2;
        grid-template-columns: auto;
        grid-gap: 3rem;
        max-width: 108.2rem;
        margin: 0 auto;


        @media screen and (min-width: 577px){
            grid-template-columns: 1fr 1fr;
        }
        
        @media screen and (min-width: 1024px){
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 3rem;
        }
    }

`

const NewsPage = () => {

    const dispatch = useDispatch();
    const {news, loading, error} = useSelector(state => state.newsList)

    useEffect(() => {
      dispatch(listNews());
    }, [dispatch])

    return (

        loading ? <div>Loading ...</div> : 
        error ? <div>{error}</div> : 

        <NewsPageStyle>
    
            <div className="inspiration-content">
                
                    {news.map((blog, index) => <BlogCard blogText={blog} key={index} className="blog-card"/>)}
              
            </div>
        </NewsPageStyle>
    )
}

export default NewsPage