import React from 'react'
import { BrowserRouter as Router , Link } from "react-router-dom";
import '../components/NavbarStyle.css';

function Navbar() {
    return (
        <div id='navbar'>
            <Link className='nav-links' to='/'>Home</Link>
            <Link className='nav-links' to='/profile'>Profile</Link>
        </div>
    )
}

export default Navbar
