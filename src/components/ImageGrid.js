// src/components/ImageGrid.js
"use client";

import React, { useState, useCallback } from "react";
import Modal from "./Modal";
import { CldImage } from "next-cloudinary";
import styles from "../styles/ImageGrid.module.css";

const ImageGrid = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = useCallback((src, alt) => {
    setSelectedImage({ src, alt });
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }, []);

  return (
    <>
      {images.map((image) => (
        <div
          key={image.public_id}
          className={styles.gridItem}
          onClick={() => openModal(image.secure_url, image.public_id)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) =>
            e.key === "Enter" && openModal(image.secure_url, image.public_id)
          }
        >
          <CldImage
            src={image.public_id}
            alt={image.public_id}
            width={image.width || 800} // Use original width or fallback
            height={image.height || 600} // Use original height or fallback
            className={styles.image}
            loading="lazy"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,...`}
          />
        </div>
      ))}
      {selectedImage && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </>
  );
};

export default ImageGrid;