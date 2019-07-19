import React, { Component } from "react";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onBtnClick = (e) => {
    e.preventDefault();
    // alert(this.state.inputValue);
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form name={this.props.name}
            action="/"
            className={this.props.className}
            onSubmit={this.onBtnClick}>
        <input type="text"
               className="form__input"
               value={this.state.label}
               onChange={this.onLabelChange}
               placeholder="Some text"/>
        <input type="submit"
               className="btn btn_active form__btn"
               value="Send"
               onClick={() => this.props.onItemAdded("hello world")}
               />
      </form>
    );
  };
}


