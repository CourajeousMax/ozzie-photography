// src/components/ImageGrid.js
"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { CldImage } from "next-cloudinary";
import styles from "../styles/ImageGrid.module.css";

const ImageGrid = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });

  const openModal = (src, alt) => {
    setSelectedImage({ src, alt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage({ src: "", alt: "" });
  };

  return (
    <>
      {images.map((image) => (
        <div
          key={image.public_id}
          className={styles.gridItem}
          onClick={() => openModal(image.secure_url, image.public_id)}
        >
          <CldImage
            src={image.public_id}
            alt={image.public_id}
            width={300}
            height={400}
            className={styles.image}
            objectFit="cover"
          />
        </div>
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
      />
    </>
  );
};

export default ImageGrid;
