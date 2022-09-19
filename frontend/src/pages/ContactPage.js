import React, {Fragment, useEffect} from 'react';
import {listNews} from '../actions/newsActions';
import { useDispatch, useSelector } from 'react-redux';
import { ContactCardStyle, ContactPageStyle } from './styles/ContactPageStyle';

const shopData = [
    {city: 'Aurea/Milan', manager: 'Corso Garibaldi', telephone: '00000000000', email: 'aureamilan@aurea.com', hours: 'Monday-Saturday |  10:00 - 19:00', img: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22abe31e079abf_shop1.jpg'},
    {city: 'Aurea/Los Angeles', manager: 'Corso Garibaldi', telephone: '00000000000', email: 'aureamilan@aurea.com', hours: 'Monday-Saturday |  10:00 - 19:00', img: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22abc026079abe_shop2.jpg'},
    {city: 'Aurea/New York', manager: 'Corso Garibaldi', telephone: '00000000000', email: 'aureamilan@aurea.com', hours: 'Monday-Saturday |  10:00 - 19:00', img: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab7714079ac0_shop3.jpg'},
]



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