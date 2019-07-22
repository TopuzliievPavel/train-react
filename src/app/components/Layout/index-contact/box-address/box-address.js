import React, { Component } from "react";
import IndexContactTitle from "../index-contact-title/index-contact-title";


export default class BoxAddress extends Component {
  render() {
    return (
      <div className="box-address">
        <IndexContactTitle className="box-address__title" title="Contact" />

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
    );
  }
}