import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="navbar">
            <ul className='navlist'>
                <li>
                    <Link to="/" className='link'>Home</Link>
                </li>
                <li onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)} >

                    <Link to="/epoques" className='link'>Epoques</Link>
                    {showDropdown && (
                        <ul className="submenu">
                            <li><Link to="/epoques/medieval">Medieval</Link></li>
                            <li><Link to="/epoques/renaissance">Renaissance</Link></li>
                            <li><Link to="/epoques/baroque">Baroque</Link></li>
                            <li><Link to="/epoques/vienna">Vienna Classics</Link></li>
                            <li><Link to="/epoques/romantics">Romantics</Link></li>
                            <li><Link to="/epoques/category2">Category 2</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/genres" className='link'>Genres</Link>
                </li>
            </ul>
        </nav>
    );
}
