import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import molcajete from '../../assets/molcajete2.png'
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <header className={click ? "header active" : "header"}>
            <nav className="nav container">
                {/* Icon made by Freepik from flaticon.com */}
                <NavLink exact to="/" className="nav-logo">
                    <img src={molcajete} alt="molcajete" className="" />
                </NavLink>
                <div className={click ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-link"
                                onClick={() => setClick(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-link"
                                onClick={() => setClick(false)}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/menu"
                                activeClassName="active"
                                className="nav-link"
                                onClick={() => setClick(false)}
                            >
                                Menu
                            </NavLink>
                        </li>
                    </ul>
                    {click ? 
                        <button className="mobile-btn">
                            <Link
                                exact
                                to="/menu"
                            >
                                Order Now
                            </Link>
                        </button> : null }
                </div>
                <button className="nav-btn">
                    <Link
                        exact
                        to="/menu"
                    >
                        Order Now
                    </Link>
                </button> 
                <div className="nav-icon" onClick={handleClick}>
                    {click ? <RiCloseLine /> : <RiMenu3Line />}
                </div>
            </nav>
        </header>
    );
}

export default Navbar
