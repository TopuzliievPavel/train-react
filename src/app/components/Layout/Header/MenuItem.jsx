import React from 'react';
import PropTypes from 'prop-types';

export class MenuItem extends React.Component {
  render() {
    return <li className={this.props.className}>
      <a className="menu__link" href="/">{this.props.name}</a>
    </li>
  }
}

MenuItem.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string
};