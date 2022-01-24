import React, { useState } from 'react';
import Slider from 'react-slick';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import clients from './clientData';

const Testimonials = () => {
    const [clientIndex, setClientIndex] = useState(0);

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <RiArrowRightSLine />
            </div>
        );
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <RiArrowLeftSLine />
            </div>
        );
    }

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setClientIndex(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '100px',
                    slidesToScroll: 1,
                    fade: true,
                    centerMode: false
                }
            }
        ]
    }

    return (
        <section className="testimonials">
            <h1 className="heading">Testimonials</h1>
            <div className="testimonials-slider">
                <Slider {...settings}>
                    {clients.map((client, index) => (
                        <div className={index === clientIndex ? "slide activeSlide" : "slide"}>
                            <img src={client.img} alt={client.img} className='client-img' />
                            <div className="client-content">
                                <p className="client-review">
                                    <span className="accent-text">"</span>{client.review}<span className="accent-text">"</span>
                                </p>
                                <h3 className="client-name">- {client.name}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div> 
        </section>
    )
}

export default Testimonials
