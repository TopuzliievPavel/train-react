import React from 'react';
import { MenuItem } from "./MenuItem";
import './styles.scss'
import logo from '../../../../utils/img/logo.png';

const links = [
  'Content',
  'Other link',
  'About us',
  'Contact us'
];

export class Header extends React.Component {
 render() {
   return (
     <div className="header">
       <div className="navigation-menu">
         <button className="menu-open">
           <span></span>
         </button>

         <ul className="menu">
           {links.map(
             function (item, id) {
                return <MenuItem name={item} key={item} className="menu__item"/>
             }
           )}
         </ul>
       </div>

       <div className="logo">
         <a href="/">
           <img src={logo} alt="SSAGroup"/>
         </a>
       </div>
     </div>
   );
 }
}