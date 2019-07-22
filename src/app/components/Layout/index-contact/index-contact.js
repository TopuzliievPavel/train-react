import React, { Component } from "react";
import ItemAddForm from "./item-add-form";
import BoxCommunity from "./box-community";
import IndexContactTitle from "./index-contact-title/index-contact-title";
import BoxAddress from "./box-address/box-address";

export default class IndexContact extends Component {

  maxId = 100;

  state = {
    todoData: [
      { label: "Link1"},
      { label: "Link 2"},
      { label: "Some long long link"},
      { label: "Somelonglonglong 4"}
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

    const { todoData } = this.state;

    return (
      <section className="index-contact">
        <div className="index-contact-wrap container">

          <div className="index-contact-box">
            <IndexContactTitle className="index-contact-box__title" title="Text in the input must be show in the content page" />
            <ItemAddForm name="index-form" className="index-form"
                        onItemAdded={this.addItem} />
          </div>

          <div className="index-contact-box index-contact_modify">
            <BoxCommunity communityList={todoData} />

            <BoxAddress />
          </div>

        </div>

      </section>
    );
  }
}
