import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export class MenuItem extends React.Component {
  render() {
    return (
      <li className={this.props.className}>
        <Link to={this.props.target} className="menu__link">
          {this.props.title}
        </Link>
      </li>
    );
  };
}

MenuItem.propTypes = {
  target: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
};