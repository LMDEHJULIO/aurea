import React from 'react';
import styled from 'styled-components';
import { BlogCardStyle } from './styles/BlogCardStyle';

const BlogCard = (props) => {
  return (
    <BlogCardStyle className="card--news-card card--news-card--1">
        <div className="card__img-container">
          <img src={props.blogText.image}/>
        </div>
    
        <div className="card__content">
        <span></span>
        <h3>{props.blogText.title}</h3>

        <h4>March 2, 2020</h4> 
        </div>
    </BlogCardStyle>
  )
}

export default BlogCard