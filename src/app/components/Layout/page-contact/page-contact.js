import React, { Component } from "react";

export default class MainContact extends Component {
  render() {
    return (
      <section className="contact">
        <div className="contact-wrap container">

          <div className="contact-box">
            <h6 className="contact-box__title">
              Text in the input must be show in the content page
            </h6>
            <form name="contact-form" action="/" className="form">
              <input type="text" className="form__input" placeholder="Some text" />
              <input type="submit" className="btn btn_active form__btn" value="Send" />
            </form>
          </div>

          <div className="contact-box contact-box_modify">
            <div className="box-community">
              <h6 className="box-community__title">Community</h6>
              <ul className="box-community__list">
                <li className="box-community__item">
                  <a href="/" className="box-community__link">Link 1</a>
                </li>
                <li className="box-community__item">
                  <a href="/" className="box-community__link">Link 2</a>
                </li>
                <li className="box-community__item">
                  <a href="/" className="box-community__link">Some long long link
                    3</a>
                </li>
                <li className="box-community__item">
                  <a href="/" className="box-community__link">Somelonglonglink 4</a>
                </li>
              </ul>
            </div>

            <div className="box-address">
              <h6 className="box-address__title">Contact</h6>

              <dl className="box-address__list">
                <dt className="box-address__term">Address:</dt>
                <dd className="box-address__description">
                  <address>Country City, Street 123</address>
                </dd>
                <dt className="box-address__term">Telephone</dt>
                <dd className="box-address__description">
                  <a className="box-address__link" href="tel:123456789">(123) 456 78 90</a>
                </dd>
                <dt className="box-address__term">Email:</dt>
                <dd className="box-address__description">
                  <a className="box-address__link" href="mailto:somemail@mail.com">somemail@mail									.com</a>
                </dd>
              </dl>
            </div>
          </div>

        </div>

      </section>
    );
  }
}