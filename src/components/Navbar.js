import React , { useContext, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { UserNameContext } from '../context';
import '../components/NavbarStyle.css';

function Navbar() {
    const { userName , setUsername } = useContext(UserNameContext);

    return (
        <div id='navbar'>
            <NavLink exact activeClassName='active-links' className='nav-links' to='/'>Home</NavLink>
            <NavLink exact activeClassName='active-links' className='nav-links' to='/profile'>Profile</NavLink>
            <h5 style={{

                paddingLeft: '40px',
                color: '#FFFFFF',
                fontWeight: '500'
                }}>Hi, {userName}</h5>
        </div>
    )
}

export default Navbar
