"use client";
import React, { useState, useCallback } from "react";
import Modal from "./Modal";
import CloudinaryImage from "./CloudinaryImage"; // Updated import
import styles from "../styles/ImageGrid.module.css";

const ImageGrid = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const openModal = useCallback((index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  }, []);

  const navigateImage = useCallback((direction) => {
    setSelectedImageIndex((currentIndex) => {
      let newIndex = currentIndex + direction;
      if (newIndex < 0) newIndex = images.length - 1;
      if (newIndex >= images.length) newIndex = 0;
      return newIndex;
    });
  }, [images.length]);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {images.map((image, index) => (
        <div
          key={image.public_id}
          className={`${styles.gridItem} ${isLoaded ? styles.loaded : ''}`}
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => openModal(index)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && openModal(index)}
        >
          <CloudinaryImage
            src={image.public_id}
            alt={image.public_id}
            width={image.width || 800}
            height={image.height || 600}
            className={styles.image}
            loading="lazy"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,...`}
          />
        </div>
      ))}
      {isModalOpen && selectedImageIndex !== null && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          imageSrc={images[selectedImageIndex].secure_url}
          imageAlt={images[selectedImageIndex].public_id}
          onNext={() => navigateImage(1)}
          onPrevious={() => navigateImage(-1)}
          hasNext={selectedImageIndex < images.length - 1}
          hasPrevious={selectedImageIndex > 0}
        />
      )}
    </>
  );
};

export default ImageGrid;