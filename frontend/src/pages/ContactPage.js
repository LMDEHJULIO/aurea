import React, {Fragment, useEffect} from 'react';
import Nav from '../components/Nav'
import styled from 'styled-components';
import BlogList from '../components/BlogList';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import {listNews} from '../actions/newsActions';
import { useDispatch, useSelector } from 'react-redux';

const shopData = [
    {city: 'Aurea/Milan', manager: 'Corso Garibaldi', telephone: '00000000000', email: 'aureamilan@aurea.com', hours: 'Monday-Saturday |  10:00 - 19:00', img: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22abe31e079abf_shop1.jpg'},
    {city: 'Aurea/Los Angeles', manager: 'Corso Garibaldi', telephone: '00000000000', email: 'aureamilan@aurea.com', hours: 'Monday-Saturday |  10:00 - 19:00', img: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22abc026079abe_shop2.jpg'},
    {city: 'Aurea/New York', manager: 'Corso Garibaldi', telephone: '00000000000', email: 'aureamilan@aurea.com', hours: 'Monday-Saturday |  10:00 - 19:00', img: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab7714079ac0_shop3.jpg'},
]

const ContactCardStyle = styled.div`

    display: flex;
    flex-direction: column;
   

    .shop-image {
        background-image: url('${ (props) => props.image}');
        background-size: cover;
        height: 40rem;
    }

    .shop-details {
        background-color: black;
        color: white;
        padding: 2rem;
    }

    @media screen and (min-width: 1000px){
        flex-direction: row;


        
        .shop-image{ 
            width: 70%;
            min-height: 63rem;
        }

        .shop-details {
            width: auto;
            width: 30%;
        }
    }
`

const ContactPageStyle = styled.div`
    display: grid;
    max-width: 1800px;
    padding: 6rem 0;

    @media screen and (min-width: 1801px){
        margin: 0 auto;
    }



    .inspiration-content {
        max-width: 1500px;
        margin: 0 auto;
        display: grid;
        grid-column: 2;
        grid-column-gap: 4rem;
    
    }

    .contact-cards {
        display: flex;
        flex-direction: column;
        gap: 5rem;
    }

    @media screen and (min-width: 550px){
        grid-template-columns: 2rem auto 2rem;

        .inspiration-content {
            max-width: 1500px;
            margin: 0 auto;
            display: grid;
            grid-column: 2;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 4rem;
    
        }

        .contact-cards {
            grid-column: 2;
        }
    }

    @media screen and (min-width: 768px){
        grid-template-columns: 8rem auto 8rem;

        .inspiration-content {
            max-width: 1500px;
            margin: 0 auto;
            display: grid;
            grid-column: 2;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 4rem;
    
        }

        .contact-cards {
            display: flex;
            flex-direction: column;
            gap: 10rem;
        }
    }



`

const ContactCard = ({shop}) => {
    return (
        <ContactCardStyle image={shop.img}>
            <div className="shop-image">

            </div>

            <div className="shop-details">
                <h3>{shop.city}</h3>

                <ul>
                    <li>{shop.manager}</li>
                    <li>{shop.telephone}</li>
                    <li>{shop.email}</li>
                    <li>{shop.hours}</li>
                </ul>
            </div>
        </ContactCardStyle>
    )
}

const ContactPage = () => {

    const dispatch = useDispatch();
    const {news, loading, error} = useSelector(state => state.newsList)

    useEffect(() => {
      dispatch(listNews());
    }, [dispatch])

    return (

        loading ? <div>Loading ...</div> : 
        error ? <div>{error}</div> : 

        <ContactPageStyle>
    
            <div className="contact-cards">
                
                    {shopData.map((shop) => <ContactCard shop={shop}/>)}
              
            </div>
        </ContactPageStyle>
    )
}

export default ContactPage