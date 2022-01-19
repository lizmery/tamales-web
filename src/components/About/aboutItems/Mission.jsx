import React from 'react';
import { Link } from 'react-router-dom';
import cornfield from '../../../assets/cornfield.jpg';
import tamales from '../../../assets/tamales2.webp';
import peppers from '../../../assets/peppers2.jpg';

const Mission = () => {
    return (
        <section className="mission grid">
            <div className="mission-content order-2">
                <h1 className="mission-heading heading">About Us</h1>
                <p className="statement">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto necessitatibus
                    accusamus maiores officiis nulla debitis soluta eos doloremque quibusdam ipsum facilis,
                    voluptatibus cumque possimus. Nam provident cum quaerat magni adipisci. <br /> <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto necessitatibus
                    accusamus maiores officiis nulla debitis soluta eos doloremque quibusdam ipsum facilis,
                    voluptatibus cumque possimus. Nam provident cum quaerat magni adipisci.
                    praesentium sapiente optio qui obcaecati nulla harum voluptas dignissimos tenetur!
                </p>
                <Link to="/menu" className="order-btn home-btn">Order Now</Link>
            </div>
            <div className="img-group order-1 grid">
                <div className="img-box img-left">
                    <img src={peppers} alt="peppers" className="" />
                </div>
                <div className="img-box img-center">
                    <img src={tamales} alt="stack of tamales" className="" />   
                </div>
                <div className="img-box img-right">
                    <img src={cornfield} alt="corn field" className="" />
                </div>
            </div>
        </section>
    )
}

export default Mission
