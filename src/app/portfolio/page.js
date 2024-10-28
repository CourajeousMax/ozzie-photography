// src/app/portfolio/page.js
import styles from "../../styles/Portfolio.module.css";
import cloudinary from "../../../config/cloudinary";
import ImageGrid from "../../components/ImageGrid";

export default async function GalleryPage() {
  try {
    const results = await cloudinary.search
      .expression("folder:ozzie")
      .sort_by("created_at", "desc")
      .max_results(70)
      .execute();

    if (!results?.resources?.length) {
      return <div>No images found.</div>;
    }

    return (
      <div className={styles.desktopPortfolioCategories}>
        <h1 className={styles.pageTitle}>Portfolio</h1>
        <p className={styles.pageSubtitle}>Explore My Collection</p>
        <div className={styles.gridColumns}>
          <ImageGrid images={results.resources} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return (
      <div className={styles.errorContainer}>
        <h2>Failed to load images</h2>
        <p>Please try again later</p>
      </div>
    );
  }
}