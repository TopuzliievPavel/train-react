import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuItem extends Component {
  render() {

    const { label, link } = this.props;

    return (
      <Link to={link} className="menu__link">
        {label}
      </Link>
    );
  };
}
