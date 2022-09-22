import React, {Fragment, useEffect} from 'react';
import Nav from '../components/Nav'
import styled from 'styled-components';
import BlogList from '../components/BlogList';
import BlogCard from '../components/BlogCard';
import {detailsNews} from '../actions/newsActions';
import { useDispatch, useSelector } from 'react-redux';
import { NewsIdPageStyle } from './styles/NewsIdPageStyle';
import CtaBumper from '../components/CtaBumper';

const NewsByIdPage = (props) => { 

    const dispatch = useDispatch();
    const newsId = props.match.params.id;

    const {news, loading, error} = useSelector(state => state.newsDetails)

    useEffect(() => {
      dispatch(detailsNews(newsId));
    }, [dispatch])

    console.log(news)

    return (

        loading ? <div>Loading ...</div> : 
        error ? <div>{error}</div> : 

        <NewsIdPageStyle>
    
            <>
                <section>
                    <CtaBumper className="cta-bumper--furniture" type="news" text={news.title} backgroundImg={news.image}/>
                </section>
                
                <section>
                    <div className='blog-content'>
                        <h3 className='blog-content__heading'>Officiis nihil et officiis et consequatur</h3>
                        <p className='blog-content__paragraphs'>
                            Commodi eum id soluta officiis velit molestiae modi ut. 
                            Quaerat magnam optio porro at praesentium necessitatibus eum. 
                            Est tempore eum natus. Laudantium ratione non tempora quae. 
                            Qui quas ipsam ex suscipit non sint.
                        </p>
                        <p className="blog-content__highlight">
                            Rerum aut consequatur. Dolores modi perspiciatis corrupti ut est. 
                            Dignissimos voluptatem delectus adipisci vel molestias qui aut quia officia. 
                            Saepe dicta delectus qui veniam et non sit. Neque officiis nihil aperiam.
                        </p>
                        <p className='blog-content__paragraphs'>
                            Qui tenetur officiis nostrum dolores eum. Iste doloremque deleniti eos. 
                            Temporibus cumque beatae hic recusandae voluptate dignissimos maiores repellat. 
                            Eveniet praesentium dicta sed inventore. 
                            Eius occaecati voluptatum amet non mollitia quod necessitatibus quo vel.
                        </p>
                        <p className='blog-content__paragraphs'>
                            Voluptatem voluptatem sit quis est. Vel culpa et sint velit. 
                            Omnis cumque ducimus dolor corporis et exercitationem libero. 
                            Non dolores maxime impedit veniam quia.
                        </p>
                    </div>
                </section>

                <section>
                    
                </section>  
            </>
            
        </NewsIdPageStyle>
    )
}

export default NewsByIdPage