import styles from "../../styles/Portfolio.module.css";
import Navbar from "../../components/Navbar";
import cloudinary from "cloudinary";
import CloudinaryImg from "./cloudinary-list";


export default async function GalleryPage() {
  const results = await cloudinary.v2.search.expression("folder:ozzie").sort_by("created_at", "desc").max_results(70).execute();

  const MAX_COLUMNS = 4;


  return (
    <div className={styles.desktopPortfolioCategories}>
      <header className={styles.headerWrapper}>
        <img className={styles.headerIcon} loading="lazy" alt="" src="/signature.png" />
      </header>
      <Navbar />
        <div className={styles.masonry}>
          <div className={styles.gridColumns}>
            {results &&
              results.resources.map((result) => (
                <CloudinaryImg key={result.public_id} src={result.public_id} alt="an image of something" width="300" height="400" />
              ))}
          </div>
        </div>
    </div>
  );
}
