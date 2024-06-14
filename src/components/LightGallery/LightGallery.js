"use client"; // Add this line at the top

import React, { useEffect } from 'react';
import 'lightgallery/css/lightgallery.css';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const LightGallery = ({ images }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgThumbnail, lgZoom],
        thumbnail: true,
        zoom: true,
      });
    }
  }, []);

  return (
    <div id="lightgallery">
      {images.map((image, index) => (
        <a href={image.src} key={index}>
          <img src={image.thumb} alt={`Thumbnail ${index}`} />
        </a>
      ))}
    </div>
  );
};

export default LightGallery;
