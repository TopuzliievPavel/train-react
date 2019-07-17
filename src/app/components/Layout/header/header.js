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


export default class Header extends Component {

 render() {
   return (
     <header className="header">
       <div className="navigation-menu" >

         <button className="menu-open">
           <span/>
         </button>

         {/*<ul className="menu">*/}
         {/*  {links.map(item => (*/}
         {/*    <MenuItem key={item.title} title={item.title} className="menu__item">*/}
         {/*      <Link to={item.url}>*/}
         {/*        {item.title}*/}
         {/*      </Link>*/}
         {/*    </MenuItem>*/}
         {/*  ))}*/}
         {/*</ul>*/}

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

       </div>

       <Link to='/' className="logo">
         <img src={logo} alt='SSAGroup' />
       </Link>
     </header>
   );
 }
}