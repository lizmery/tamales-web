import React from 'react'
import tamales from '../../assets/tamales2.webp';
import './Menu.css'

const MenuItem = ({ item }) => {
    return (
        <>
            <div className="item-img-box">
                <img src={tamales} alt={item.alt} className="item-img" />
            </div>
            <div className="item-content">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">
                    {item.description}
                </p>
                <h6 className="item-price">{item.price}</h6>
                <button className="add-btn">Add to cart</button>
            </div>
        </>
    )
}

export default MenuItem
