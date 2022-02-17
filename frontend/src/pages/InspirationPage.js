import React, {Fragment, useEffect} from 'react';
import Nav from '../components/Nav'
import styled from 'styled-components';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';
import {listNews} from '../actions/newsActions';
import { useDispatch, useSelector } from 'react-redux';
import InspirationCard from '../components/InspirationCard';

const inspirationgData = [
    {href: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab40b1079adc_1.jpg'},
    {href: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab978c079add_2.jpg'},
    {href: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab4224079ade_3.jpg'},
    {href: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab7e34079adf_4.jpg'},
    {href: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab956e079ae0_5.jpg'},
    {href: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab1ff5079ae1_6.jpg'},
    {href: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab7a25079ae2_7.jpg'},
    {href: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab674d079ae3_8.jpg'},
]


const InspirationPageStyle = styled.div`



    display: grid;
    grid-template-columns: 2rem auto 2rem;
    padding: 6rem 0;

    .inspiration-col {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .inspiration-content {
        max-width: 1500px;
        margin: 0 auto;
        display: grid;
        grid-column: 2;
        grid-template-columns: auto;
        
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
            padding-top: 8rem;
        }

        .inspiration-col-1 {
            gap: 5rem;
            padding-top: 5rem;
        }
        .inspiration-col-2 {
            gap: 6rem;
        }
    }



`

const InspirationPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listNews());
    }, [dispatch])

    return (


        <InspirationPageStyle>

            <div className="inspiration-content">
                <div className="inspiration-col inspiration-col-1">
                    
                    {inspirationgData.slice(0, 4).map((card, index) => <InspirationCard cardData={card} key={index} className="inspiration-card"/>)}
                </div>

                <div className="inspiration-col inspiration-col-2">
                    {inspirationgData.slice(4,8).map((card, index) => <InspirationCard cardData={card} key={index} className="inspiration-card"/>)}
                </div>
            </div>


        </InspirationPageStyle>
    )
}

export default InspirationPage