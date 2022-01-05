import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    Tamales Vigil
                </NavLink>

                <div className="nav-icon" onClick={handleClick}>
                    {click ? <RiCloseLine /> : <RiMenu3Line />}
                </div>

                <div className={click ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/menu"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Menu
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-btn">
                        <button>
                            <Link
                                exact
                                to="/menu"
                            >
                                Order Now
                            </Link>
                        </button>
                    </div>
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar
