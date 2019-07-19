import React, { Component } from "react";
import ItemAddForm from "./item-add-form";

export default class IndexContact extends Component {

  maxId = 100;

  state = {
    todoData: [
      { label: null, id: 1}
    ]
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      id: this.maxId++
    };

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });
  };



  render() {
    return (
      <section className="index-contact">
        <div className="index-contact-wrap container">

          <div className="index-contact-box">
            <h6 className="index-contact-box__title">
              Text in the input must be show in the content page
            </h6>
            <ItemAddForm name="index-form" className="index-form"
                        onItemAdded={this.addItem} />

          </div>

          <div className="index-contact-box index-contact_modify">
            <div className="box-community">
              <h6 className="box-community__title">Community</h6>
              <ul className="box-community__list">
                <li className="box-community__item">
                  <a href="/" className="box-community__link">Link</a>
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
                {
                  this.state.todoData.map(item => {
                    return <li key={item.id} className="box-community__item">
                      <a href="/" className="box-community__link">
                        {item.label}
                      </a>
                    </li>
                  })
                }
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
