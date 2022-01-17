import React from 'react';
import MenuItem from './MenuItem';
import menuData from './menuData';
import './Menu.css'


const Menu = () => {
    return (
        <div className="menu-container">
            <h1 className="menu-heading">Our Menu</h1>
            <div className="menu-grid">
                {menuData.map((item) => (
                    <div className="menu-item" key={item.id}>
                        <MenuItem item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu
