import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({
  cloud_name: 'your-cloud-name',
  secure: true
});

export default cloudinary;
