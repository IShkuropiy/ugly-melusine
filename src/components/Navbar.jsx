import React from 'react';
import { NavLink } from "react-router-dom";
import { NAV } from './navData';
import './Navbar.css';


export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navlist">
                <li><NavLink to="/" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>Home</NavLink></li>
                <li><NavLink to="/epoques" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>Epoques</NavLink></li>
                <li><NavLink to="/genres" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>Genres</NavLink></li>
                <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>Gallery</NavLink></li>
            </ul>
        </nav>
    )
}
