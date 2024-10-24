// src/app/portfolio/page.js
import styles from "../../styles/Portfolio.module.css";
import Navbar from "../../components/Navbar";
import cloudinary from "../../../config/cloudinary";
import ImageGrid from "../../components/ImageGrid";

export default async function GalleryPage() {
  try {
    const results = await cloudinary.search
      .expression("folder:ozzie")
      .sort_by("created_at", "desc")
      .max_results(70)
      .execute();

    return (
      <div className={styles.desktopPortfolioCategories}>
        <header className={styles.headerWrapper}>
          <img
            className={styles.headerIcon}
            loading="lazy"
            alt="Signature"
            src="/signature.png"
          />
        </header>
        <Navbar />
        <div className={styles.gridColumns}> {/* Changed from .masonry to .gridColumns */}
          <ImageGrid images={results.resources} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return <div>Failed to load images.</div>;
  }
}
