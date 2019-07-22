import React, { Component } from "react";
import IndexContactTitle from "../index-contact-title/index-contact-title";

export default class BoxCommunity extends Component {
  render() {

    const { communityList } = this.props;

    return (
      <div className="box-community">
        <IndexContactTitle className="box-community__title" title="Community" />
        <ul className="list-group">
          {communityList.map((item, id) =>
            <li key={id} className="list-group__item">
              <a href="/" className="list-group__link">{item.label}</a>
            </li>
          )}
        </ul>
      </div>
    );
  };
}