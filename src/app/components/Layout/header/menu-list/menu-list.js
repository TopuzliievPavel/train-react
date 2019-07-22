import React from "react";
import MenuItem from "../menu-item/menu-item";

export class MenuList extends React.Component {
  render() {

    const { menu } = this.props;

    const menuItems = menu.map((item) => {

      const { id, ...itemProps } = item;

      return (
        <li key={id} className="menu__item">
          <MenuItem { ...itemProps } />
        </li>
      );
    });

    return (
      <ul className="menu">
        { menuItems }
      </ul>
    );
  };
}