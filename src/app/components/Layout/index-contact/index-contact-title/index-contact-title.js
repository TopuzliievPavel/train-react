import React, { Component } from "react";

export default class IndexContactTitle extends Component {
  render() {
    return (
      <h6 className={this.props.className}>{this.props.title}</h6>
    );
  };
}