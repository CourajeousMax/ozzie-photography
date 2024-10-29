"use client";

import { CldImage } from "next-cloudinary";
import styles from "../styles/Portfolio.module.css"; 

export default function CloudinaryImage({ className, ...props }) {
  return (
    <CldImage
      className={`${styles.image} ${className}`}
      sizes="(max-width: 725px) 100vw, 25vw" 
      {...props}
    />
  );
}