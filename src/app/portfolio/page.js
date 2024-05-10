import Navbar from "../../components/Navbar.js";
import styles from "../../styles/Portfolio.module.css";

const DesktopPortfolioCategories = () => {
  return (
    <div className={styles.desktopPortfolioCategories}>
      <header className={styles.headerWrapper}>
        <img
          className={styles.headerIcon}
          loading="lazy"
          alt=""
          src="/signature-dark.png"
        />
      </header>
      <Navbar />
      <div className={styles.imageTextWrapper}>
        <img
          className={styles.imageIcon}
          alt=""
          src="/cursivewritingozziegonzalez-1@2x.png"
        />
        <div className={styles.textWrapper}>{`Landscape Portfolio `}</div>
      </div>
      <main className={styles.mainInner}>
        <section className={styles.imageGroup}>
          <img
            className={styles.imageIcon}
            alt=""
            src="/cursivewritingozziegonzalez-1@2x.png"
          />
          <button className={styles.textContainer}>
            <div className={styles.text}>{`Landscape Portfolio `}</div>
          </button>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.onAVineOzzieGonzalez1Parent}>
          <img
            className={styles.onAVineOzzieGonzalez1Icon}
            alt=""
            src="/onavineozziegonzalez-1@2x.png"
          />
          <button className={styles.wildlifePortfolioWrapper}>
            <div className={styles.wildlifePortfolio}>Wildlife portfolio</div>
          </button>
        </div>
        <div className={styles.theSpotOzzieGonzalez1Parent}>
          <img
            className={styles.theSpotOzzieGonzalez1Icon}
            alt=""
            src="/thespotozziegonzalez-1@2x.png"
          />
          <button className={styles.galleriesByLocationWrapper}>
            <div className={styles.galleriesByLocation}>
              Galleries by location
            </div>
          </button>
        </div>
      </div>
      <div className={styles.daysEndOzzieGonzalez1Parent}>
        <img
          className={styles.daysEndOzzieGonzalez1Icon}
          alt=""
          src="/daysendozziegonzalez-1@2x.png"
        />
        <div className={styles.lifestyleAndAdventurePortfoWrapper}>
          <div className={styles.lifestyleAndAdventure}>
            Lifestyle and adventure portfollio
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopPortfolioCategories;
