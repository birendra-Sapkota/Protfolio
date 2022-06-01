import React from 'react';
import './navbar.css';

const Navbar = ()=>{
return(
<div className='nav-wrapper'>
    <div className='nav-left'>
        <div className='nav-logo'>Birendra </div>
        <span>Toggle</span>
    </div>
    <div className='nav-right'>
        <div className='nav-list'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Resume</li>
                <li>Protfolio</li>
                <li>Testimonials</li>
                <button className='button nav-button'>
                Contact
            </button>
            </ul>
 
        </div>
    </div>
 

</div>);
};

export default Navbar;