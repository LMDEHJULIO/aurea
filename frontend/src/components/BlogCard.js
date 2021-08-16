import React from 'react';

const BlogCard = (props) => {
  return (
    <div className="card--news-card card--news-card--1">
        <div className="card__img-container">
          <img src={props.blogText.image}/>
        </div>
    
        <div className="card__content">
        <span></span>
        <h3>{props.blogText.title}</h3>

        <h4>{props.blogText.date}</h4> 
        </div>
    </div>
  )
}

export default BlogCard