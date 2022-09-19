import React, {Fragment, useEffect} from 'react';
import Nav from '../components/Nav'
import styled from 'styled-components';
import BlogList from '../components/BlogList';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import {listNews} from '../actions/newsActions';
import { useDispatch, useSelector } from 'react-redux';
import { NewsPageStyle } from './styles/NewsPageStyle';

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