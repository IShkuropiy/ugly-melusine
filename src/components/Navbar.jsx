import React from 'react';
import { NavLink } from "react-router-dom";
import { NAV } from './navData';
import './Navbar.css';

export default function Navbar() {
    // which submenu is open on mobile
    const [openKey, setOpenKey] = useState(null);
    const toggle = (i) => setOpenKey(k => (k === i ? null : i));

    const linkCls = ({ isActive }) => (isActive ? 'navLink active' : 'navLink');

    return (
        <nav className="navbar" aria-label="Main">
            <ul className="navlist" role="menubar">
                {NAV.map((item, i) => {
                    const hasChildren = Array.isArray(item.children) && item.children.length > 0;
                    const isOpen = openKey === i;

                    return (
                        <li
                            key={item.label}
                            className={`navitem ${hasChildren ? 'has-children' : ''}`}
                            role="none"
                            data-open={isOpen ? 'true' : 'false'}
                        >
                            {/* top-level link */}
                            <NavLink to={item.to} className={linkCls} role="menuitem">
                                {item.label}
                            </NavLink>

                            {/* mobile toggle button appears only on small screens via CSS */}
                            {hasChildren && (
                                <>
                                    <button
                                        className="submenu-toggle"
                                        aria-expanded={isOpen}
                                        aria-controls={`submenu-${i}`}
                                        onClick={() => toggle(i)}
                                        title={`Toggle ${item.label}`}
                                    >
                                        ▾
                                    </button>

                                    {/* submenu */}
                                    <ul
                                        id={`submenu-${i}`}
                                        className="submenu"
                                        role="menu"
                                        aria-label={`${item.label} submenu`}
                                    >
                                        {item.children.map((child) => (
                                            <li key={child.label} role="none">
                                                <NavLink to={child.to} className={linkCls} role="menuitem">
                                                    {child.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
/*export default function Navbar() {
    return (
        <nav className="navbar">

            <ul className="menu">
                {NAV.map((item) => (
                    <li key={item.label}>
                        <Link to={item.to}>{item.label}</Link>
                        {item.children && (
                            <ul>
                                {item.children.map((child) => (
                                    <li key={child.label}>
                                        <Link to={child.to}>{child.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

        </nav >
    )
}

/*<ul className="navlist">
    <li><NavLink to="/" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>Home</NavLink></li>
    <li><NavLink to="/epoques" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>Epoques</NavLink></li>
    <li><NavLink to="/genres" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>Genres</NavLink></li>
    <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>Gallery</NavLink></li>*/