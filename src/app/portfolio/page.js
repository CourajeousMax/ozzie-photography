"use client"; // Add this line at the top

import React, { useState } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import dynamic from 'next/dynamic';
import ImageUpload from "@/components/ImageUpload/ImageUpload";
import styles from "@/styles/modules/Portfolio.module.css";

// Use dynamic import for LightGallery with ssr: false
const LightGallery = dynamic(() => import('@/components/LightGallery/LightGallery'), { ssr: false });

const PortfolioPage = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (url) => {
    setImages([...images, { src: url, thumb: url }]);
  };

  return (
    <div className={styles.desktopPortfolioCategories}>
      <header className={styles.headerWrapper}>
        <img className={styles.headerIcon} loading="lazy" alt="" src="/signature-dark.png" />
      </header>
      <Navbar />
      <ImageUpload onUpload={handleImageUpload} />
      <LightGallery images={images} />
    </div>
  );
};

export default PortfolioPage;
