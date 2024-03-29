import React from 'react';
import '../components/Menu.css';
import {Link} from 'react-router-dom';
const Menu = () =>{
    return(
        <div className="MenuStyle">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="Avatar">Avatar</Link></li>
            <li><Link to="Contact">Contact</Link></li>
        </ul>
        </div>
    )
}

export default Menu;