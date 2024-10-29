"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({ 
  isOpen, 
  onClose, 
  imageSrc, 
  imageAlt,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight" && hasNext) {
        onNext();
      } else if (event.key === "ArrowLeft" && hasPrevious) {
        onPrevious();
      }
    };
    
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious]);

  if (!isOpen) return null;

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles.overlay}
      onClick={handleClickOutside}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modal}>
        {isLoading && <div className={styles.loader}>Loading...</div>}
        
        <button
          className={`${styles.navigationButton} ${styles.prevButton} ${!hasPrevious ? styles.disabled : ''}`}
          onClick={onPrevious}
          disabled={!hasPrevious}
          aria-label="Previous image"
        >
          ←
        </button>
        
        <img
          src={imageSrc}
          alt={imageAlt}
          className={styles.modalImage}
          onLoad={() => setIsLoading(false)}
          style={{ display: isLoading ? "none" : "block" }}
        />
        
        <button
          className={`${styles.navigationButton} ${styles.nextButton} ${!hasNext ? styles.disabled : ''}`}
          onClick={onNext}
          disabled={!hasNext}
          aria-label="Next image"
        >
          →
        </button>
        
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal;