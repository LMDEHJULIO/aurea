import React from 'react';
import { SubscribeFormStyle } from './styles/SubscribeFormStyle';


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