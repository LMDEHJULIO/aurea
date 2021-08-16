import React from 'react';
import styled from 'styled-components';

const SubscribeFormStyle = styled.form`

    display: flex;
    flex-direction: column;
    max-width: 40rem;
    margin: 0 auto;


    // @media screen and (min-width: 768px){
    //     padding: 0 16rem;
    // }

    // @media screen and (min-width: 1440px) {
    //     padding: 0 33rem;
    // }

    // @media screen and (min-width: 2613px) {
    //     padding: 0 69rem;
    // }

    .form-bottom {
        margin-top: 3rem;
    }

    .checkbox-container {
        display: flex;
        text-align: left;
        align-items: baseline;
        margin-bottom: 2rem;

        input {
            margin-right: .5rem;
        }

        p {
            color: grey;
            font-size: 1.5rem;
        }
    }

    input[type="text"], input[type="email"] {
        height: 2rem;
        padding: 2.5rem;
        border: solid 1px #cecece;

        &:not(:last-child){
            margin-bottom: 2rem;
        }
    }

    input[type="submit"] {
        background-color: grey;
        width: 23rem;
        margin: 0 auto;
        color: white;
        padding: 2rem;
        border: 0;
    }


.form--add-to-cart {
    &__input {
        background-color: #eee;
        border: solid 1px #c8c8c8;
        padding: 1.4rem 1rem;
        border-radius: .2rem;
        max-width: 6rem;
        margin-right: 1rem;
    } 
}



`

const SubscribeForm = () => {
  return (
    <section className="section-contact">

    <h3>Subscribe to the newsletter</h3>
    <h2>Stay updated on products, news, and events.</h2>
    <div>
      <SubscribeFormStyle className="subscribe-form">
        <input type="text" placeholder="First Name" id="First Name"/>
        <input type="text" placeholder="Last Name" id="Last Name"/>
        <input type="email" placeholder="Email" id="Email"/>
        <input type="submit" value="Submit"/>

        <div className="form-bottom">
          <div className="checkbox-container">
            <input type="checkbox" className="checkbox subscribe-form__checkbox"/>
            <p>
              Nunc vitae nisl dignissim, porttitor quam at, malesuada dui. Ut convallis lacus at congue vestibulum. Maecenas quis mollis ipsum. Nam urna sapien,
            </p>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="checkbox subscribe-form__checkbox"/>
            <p>
              Vivamus et sapien tempus, varius arcu nec, ornare arcu. Donec neque massa, fringilla vel nibh a, faucibus malesuada mi.
            </p>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="checkbox subscribe-form__checkbox"/>
            <p>
              Aliquam pulvinar mattis risus eget malesuada. Suspendisse efficitur leo sed felis iaculis, eu varius risus dapibus. Nulla mollis lacus sit amet consequat tincidunt.
            </p>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="checkbox subscribe-form__checkbox"/>
            <p>
              Praesent maximus tellus vitae semper consequat. Phasellus tristique et lectus at euismod.
            </p>
          </div>
        </div>
        

      </SubscribeFormStyle>
    </div>
  </section>
  )
}

export default SubscribeForm;