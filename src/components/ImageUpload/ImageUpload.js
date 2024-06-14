"use client"; // Add this line at the top

import React, { useState } from 'react';
import axios from 'axios';
import cloudinary from '@/config/cloudinary';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your-upload-preset');

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/image/upload`,
        formData
      );
      setUrl(response.data.secure_url);
    } catch (error) {
      console.error('Error uploading image', error);
    }
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    uploadImage(file);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {image && <img src={image} alt="Preview" />}
      {url && <img src={url} alt="Uploaded" />}
    </div>
  );
};

export default ImageUpload;
