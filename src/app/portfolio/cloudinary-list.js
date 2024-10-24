"use client";

import { CldImage } from "next-cloudinary";
import styles from "../../styles/Portfolio.module.css"; // Adjust the path as needed

export default function CloudinaryImage({ className, ...props }) {
  return (
    <CldImage
      className={`${styles.image} ${className}`}
      sizes="(max-width: 725px) 100vw, 25vw" // Adjust as needed
      {...props}
    />
  );
}

