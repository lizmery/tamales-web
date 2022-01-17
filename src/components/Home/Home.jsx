import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <section className="home">
            <div className="home-container">
                <h1>Authentic Tamales</h1>
                <h6>A taste of Oaxaca, made with the utmost care</h6>
                <Link to="/about" className="home-btn">Learn More</Link>
            </div>
        </section>
    )
}

export default Home
