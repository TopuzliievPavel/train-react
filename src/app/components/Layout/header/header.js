import React, { Component } from 'react';
import { MenuList } from "./menu-list/menu-list";
import { Link } from 'react-router-dom';
import logo from '../../../../utils/img/logo.png';

const toggle = () => {
  let burger = document.querySelector(".menu-open");
  burger.classList.toggle("active");
  let menu = document.querySelector(".menu");
  menu.classList.toggle("show")
};

const menu = [
  { label: "Content", link: "/Content", id: 1 },
  { label: "Other Link", link: "/Other", id: 2 },
  { label: "About us", link: "/About", id: 3 },
  { label: "Contact", link: "/Contact", id: 4 }
];

export default class Header extends Component {
   render() {
     return (
       <header className="header">

           <button className="menu-open" onClick={toggle}>
             <span />
           </button>

           <MenuList className="menu" menu={menu} />

           <Link to='/' className="logo">
             <img src={logo} alt='SSAGroup'/>
           </Link>

       </header>
     );
   }
}