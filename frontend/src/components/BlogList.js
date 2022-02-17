import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BlogCard from '../components/BlogCard';

const BlogListStyle = styled.div`


    /* padding: 2rem; */
    max-width: 1223px;
    grid-row-gap: 4rem;
  
    @media screen and (min-width: 620px) {
      /* padding: 6rem; */
  
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
`

const BlogList = ({children}) => {

    const newsList = useSelector(state => state.newsList);
    const {news, loading: newsLoading, error: newsError} = newsList;

    return (
        <BlogListStyle>
          {news.filter((i,index) => index < 3).map((blog) => <BlogCard blogText={blog} key={blog._id}/>)}
        </BlogListStyle>
    )
}

export default BlogList;