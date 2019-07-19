import React, { Component } from "react";
// import Iframe from "react-iframe";

export class Contact extends Component {
  render() {
    return (
      <main className="contact-main">
        <div className="container contact-wrap">
          <h2 className="contact__title">Contact</h2>
          <p>Thank you for your interest in Awesome Motive Inc.</p>
          <p>If you’re looking for technical support, have a billing question or complaint, then please use the contact form on the specific product.</p>
          <p>If you’re looking for a strategic partnership with one of our properties, then please use the dedicated form on the specific product website.</p>
          <p>If none of the above apply to you, then go ahead and use the contact form below. Someone will be in touch within a week.</p>
          <form className="contact-form" action="/">
            <div className="form-group">
              <label htmlFor="exampleInputEmail">Your name <span className="contact-star">*</span></label>
              <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword">Your email <span className="contact-star">*</span></label>
              <input type="password" className="form-control" id="exampleInputPassword" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputText">What are you thinking <span className="contact-star">*</span></label>
              <input type="text" className="form-control" id="exampleInputText" />
            </div>
            <div className="form-group form-check">
              <label className="form-check-label" htmlFor="textarea">Detailed message <span className="contact-star">*</span></label>
              <textarea name="textarea" id="textarea" cols="30" rows="4" className="form-control"/>
            </div>
            <button type="submit" className="btn btn_theme_primary">Submit</button>
          </form>
          {/*<Iframe*/}
          {/*   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27949.364972993248!2d-74.05197138619836!3d40.72022589174986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2sua!4v1563380171781!5m2!1sru!2sua"*/}
          {/*   width="600" height="450" frameBorder="0" />*/}
        </div>
      </main>
    );
  };
}