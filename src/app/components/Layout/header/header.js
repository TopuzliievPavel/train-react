import React, { Component } from 'react';
// import { MenuItem } from "./menu-item/menu-item";
import { Link } from 'react-router-dom';
import logo from '../../../../utils/img/logo.png';

// const links = [
//   { title: "Content", url: "/Content" },
//   { title: "Other-link link", url: "/Other-link" },
//   { title: "About us", url: "/About" },
//   { title: "Contact", url: "/Contact" }
// ];


const toggle = () => {
  let burger = document.querySelector(".menu-open");
  burger.classList.toggle("active");
  let menu = document.querySelector(".menu");
  menu.classList.toggle("show")
};


export default class Header extends Component {

  // state = {
  //   isOpen: false
  // };

  //
  // toggleClickHandler = () => {
  //   this.setState((prevState) => {
  //     return {isMenuOpen: !prevState.isMenuOpen};
  //   })
  // };

 render() {

   // const { isMenuOpen } = this.state;

   return (
     <header className="header">

         <button className="menu-open" onClick={toggle}>
           <span />
         </button>

         <ul className="menu">
           <li className="menu__item">
             <Link to="/Content" className="menu__link">
               Content
             </Link>
           </li>
           <li className="menu__item">
             <Link to="/Other" className="menu__link">
               Other Link
             </Link>
           </li>
           <li className="menu__item">
             <Link to="/About" className="menu__link">
               About Us
             </Link>
           </li>
           <li className="menu__item">
             <Link to="/Contact" className="menu__link">
               Contact
             </Link>
           </li>
         </ul>

         <Link to='/' className="logo">
           <img src={logo} alt='SSAGroup' />
         </Link>

     </header>
   );
 }
}