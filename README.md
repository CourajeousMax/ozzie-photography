# Ozzie Gonzalez Photography Portfolio

A professional photography portfolio website built with Next.js, showcasing landscape, wildlife, and lifestyle photography. Features include a responsive image gallery, workshop booking information, and contact form integration.

## 🌟 Features

- Responsive image gallery with modal view and navigation
- Image optimization using Next.js Image and Cloudinary
- Smooth page transitions and animations
- Mobile-first responsive design
- Contact form with FormSubmit integration
- Workshop booking information
- Social media integration
- SEO optimized

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: CSS Modules & SCSS
- **Image Hosting**: Cloudinary
- **Form Handling**: FormSubmit
- **Animation**: Custom CSS animations
- **Deployment**: Vercel (recommended)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.x or higher)
- npm or yarn
- A Cloudinary account

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/CourajeousMax/ozzie-photography.git
cd ozzie
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory with the following variables:
```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open [http://localhost:3000](http://localhost:3000)**
The application should now be running on your local machine.

## 📁 Project Structure

```
.
├── config/             # Configuration files
├── public/            # Static assets
│   ├── optimized/    # Optimized images
│   └── ...
├── src/
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   ├── fonts/        # Custom fonts
│   └── styles/       # CSS and SCSS files
```

## 🎨 Key Components

- `ImageGrid`: Responsive image grid with modal view
- `Modal`: Image modal with navigation
- `CloudinaryImage`: Optimized image component
- `Navbar`: Navigation component with social links

## 🌐 Deployment

The easiest way to deploy this application is through [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your project to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

## 🔧 Configuration

### Cloudinary Setup

1. Create a Cloudinary account
2. Create a new folder named "ozzie" in your Cloudinary media library
3. Upload your images to this folder
4. Add your Cloudinary credentials to `.env.local`

### Form Submission

The contact form uses FormSubmit. No additional setup is required as it's pre-configured in the contact page component.

## 🎯 Performance Optimizations

- Images are automatically optimized through Next.js Image and Cloudinary
- CSS is modularized to prevent style conflicts
- Lazy loading implemented for images
- Smooth animations with hardware acceleration
- Responsive images with appropriate sizes

## 🌟 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details

## 🙏 Credits

- Created by Max Munez & Josue Jeronimo
- Photography by Ozzie Gonzalez
- Icons from Icons8

## 📞 Support

For support, email [josuejero@hotmail.com] or open an issue in the repository.