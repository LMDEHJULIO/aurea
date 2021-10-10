import React, {Fragment, useEffect} from 'react';
import Nav from '../components/Nav'
import styled from 'styled-components';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';
import {listNews} from '../actions/newsActions';
import { useDispatch, useSelector } from 'react-redux';
import CtaBumper from '../components/CtaBumper';
import { BumperData } from '../components/SliderData';


const BrandPageStyle = styled.div`



    display: grid;
    grid-template-columns: 7% auto 7%;
    grid-row-gap: 8rem;
    padding-bottom: 18rem;
    

    section {
        grid-column: 2;
    }

    .hero-video {
        grid-column: 1/-1;
        height: 100vh;

        video {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    .img-bumper {
        img {
            width: 100%;
        }
    }

    .content-bumper {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        @media screen and (min-width: 768px){
            width: 70%;
            margin: 0 auto;
        }


  
        span {
        background-color: red;
        width: 4rem;
        height: .2rem;
        display: block;
        }

        h3{
            font-weight: 500;
            font-size: 2rem;
        }

        p {
            font-size: 1.6rem;
            line-height: 2;
        }

    }

    .team-grid {
        display: grid;
        grid-template-columns: auto;
        column-gap: 2rem;
        row-gap: 4rem;

        @media screen and (min-width: 1000px){
            grid-template-columns: auto auto auto;

            .image-team{
                width: 100%;
            }

            .team-image-1 {
                grid-column: 1;
            }

            .team-image-2 {
                grid-column: 2;
                grid-row: 2;
            }

            .team-image-3 {
                grid-column: 3;
                grid-row: 1;
            }
        }
    }



`

const ParagraphBumper = ({children}) => {
    return(
        <section className="content-bumper">
            
            <span></span>

            <h3>Nam ultrices congue rutrum. Aliquam eu pulvinar risus. Duis at risus vitae justo auctor facilisis.</h3>

            <p>
                {children}
            </p>
            
        </section>
    )
}

const BrandPage = () => {


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

    const teamData = [
        {
            name: 'Erika Omatesu',
            title: 'Architect',
            image: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab1c2c079ace_about1'
        },
        {
            name: 'Frank Aruta',
            title: 'Industrial Designer',
            image: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab59ad079acf_about2'
        },
        {
            name: 'Raimondo Moy',
            title: 'Interior Designer',
            image: 'https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22abd103079acd_3'
        }
    ]

    return (


        <BrandPageStyle>

            <section className="hero-video">
                <video autoPlay muted  loop>
                    <source src="https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab8bf9079ad0_videoabout-transcode.mp4" data-wf-ignore="true"/>
                </video>  
            </section>

            <ParagraphBumper>
                Sed ut dui odio. Aliquam sagittis laoreet magna, non mollis lorem imperdiet non. 
                Etiam euismod nulla quis felis volutpat, nec hendrerit velit semper. Nulla facilisi. 
                Ut tempus eu nisi nec convallis. In tincidunt congue risus, eu varius mauris rutrum sed. 
                Phasellus ultricies, felis ut pulvinar fringilla, tortor velit bibendum magna, 
                sed pharetra lorem lorem non purus.
            </ParagraphBumper>

            <section className="img-bumper">
                <img src="https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab5d1b079aca_megamenu.jpg" 
                srcset="https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab5d1b079aca_megamenu-p-500.jpeg 500w, 
                https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab5d1b079aca_megamenu-p-1080.jpeg 1080w, 
                https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab5d1b079aca_megamenu-p-1600.jpeg 1600w, 
                https://assets.website-files.com/5e7a1f9f5d22ab1757079a58/5e7a1f9f5d22ab5d1b079aca_megamenu.jpg 2000w" 
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 73vw, 72vw" alt="" className="team-image__img"/>
            </section>

            <ParagraphBumper>
                Donec et dolor nunc. Nam sem metus, venenatis sit amet metus id, luctus fermentum enim. Morbi accumsan sem a justo fringilla, eget ultrices ante sagittis. 
                Integer cursus magna in lacus tempor mattis. Praesent quis tincidunt lectus, vitae faucibus sapien. Suspendisse mauris quam, gravida nec tristique ut, mattis 
                ac ante. Phasellus turpis neque, congue nec orci sed, rhoncus vehicula lorem. Vivamus et nibh vulputate, imperdiet ante auctor, malesuada dolor. Curabitur quis 
                laoreet metus. Mauris varius ultricies ultricies. Maecenas in faucibus libero. Cras malesuada ligula eget odio euismod hendrerit. Class aptent taciti sociosqu ad 
                litora torquent per conubia nostra, per inceptos himenaeos.
            </ParagraphBumper>

            <section className="slider">
                <CtaBumper textData={bumperData[0]} isSlider slides={BumperData}/>
            </section>

            <ParagraphBumper>
                Suspendisse potenti. Donec semper et eros ut pulvinar. Curabitur finibus eget quam ac mollis. Morbi urna dolor, rutrum a feugiat non, 
                molestie nec turpis. Curabitur condimentum blandit congue.
            </ParagraphBumper>


            <section className="team-grid">

                {
                    teamData.map((member,index) => (
                        <div className={`team-image-${index + 1} team-image`}>
                            <img src={`${member.image}.jpg`}
                            srcset={`${member.image}-p-500.jpeg 500w, 
                            ${member.image}-p-800.jpeg 800w, 
                            ${member.image}.jpg 1000w` }
                            sizes="(max-width: 991px) 85vw, (max-width: 1298px) 77vw, 1000px" 
                            alt="" class="image-team-first image-team"/>

                            <p>{member.name}</p>
                            <p>{member.title}</p>
                        </div>
                    ))
                }
            </section>

            <ParagraphBumper>
                Donec et dolor nunc. Nam sem metus, venenatis sit amet metus id, luctus fermentum enim. Morbi accumsan sem a justo fringilla, eget ultrices ante sagittis. 
                Integer cursus magna in lacus tempor mattis. Praesent quis tincidunt lectus, vitae faucibus sapien. Suspendisse mauris quam, gravida nec tristique ut, mattis 
                ac ante. Phasellus turpis neque, congue nec orci sed, rhoncus vehicula lorem. Vivamus et nibh vulputate, imperdiet ante auctor, malesuada dolor. Curabitur quis 
                laoreet metus. Mauris varius ultricies ultricies. Maecenas in faucibus libero. Cras malesuada ligula eget odio euismod hendrerit. Class aptent taciti sociosqu ad 
                litora torquent per conubia nostra, per inceptos himenaeos.
            </ParagraphBumper>


        </BrandPageStyle>
    )
}

export default BrandPage