import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Navebar = () => {
   const [Mobile, setMobile] = useState (false)

    return (
        <nav className="navbar">
      
      
      <h3>
        <NavLink to="/" className="logo">Habiba Chohan</NavLink>
        </h3>

        <ul className= {Mobile? "nav-links-mobile" : "nav-links"} onClick= {() =>setMobile(false)}>
         <li>
            <NavLink to="/" >Home</NavLink>
         </li>
         <li>
            <NavLink to="/about">About</NavLink>
         </li>
         <li>
            <NavLink to="/skill">Skill</NavLink>
         </li>
         <li>
            <NavLink to="/contact">Contact</NavLink>
         </li>
        </ul>


        <button className= 'mobil-menu-icon' onClick={() => setMobile(!Mobile)}>
           {Mobile? <ImCross/> : <FaBars />}</button>

    </nav>


    )
};


export default Navebar;