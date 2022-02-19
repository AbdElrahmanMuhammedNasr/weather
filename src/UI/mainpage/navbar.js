import React from 'react';
import logo from '../../assets/sun.png'



const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#"> <img src={logo} width="30" height="30" class="d-inline-block align-top" /> <span className='font-weight-bold'>Weather</span> </a>
        </nav>
    )
}
export default Navbar;