import React from 'react'

import './Navbar.css'

import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <div id="navbar">
           <nav className="nav-div">
               <ul className='nav-options'>
                   <li className='nav-list'><NavLink style={{textDecoration:'none', color:'black'}} className="nav-navlink" to='/'>Home</NavLink></li>
                   <li className='nav-list'><NavLink style={{textDecoration:'none', color:'black'}} className="nav-navlink" to='/About'>About</NavLink></li>
               </ul>
           </nav>
        </div>
    )
}
