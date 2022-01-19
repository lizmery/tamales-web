import React from 'react';
import galleryData from './galleryData';

const Gallery = () => {
    return (
        <section className="gallery">
            <h1 className="heading">Gallery</h1>
            <div className="gallery-container grid">
                {galleryData.map((item) => (
                    <div key={item.id} className="gallery-item">
                        <img src={item.img} alt={item.alt} className="gallery-img" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery
