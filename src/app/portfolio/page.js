import Image from "next/image.js";
import Navbar from "../../components/Navbar.js";
import styles from "../../styles/Portfolio.module.css";
import Writing from "../../../public/cursive-writing-ozzie-gonzalez.jpg";
import Spot from "../../../public/the-spot-ozzie-gonzalez.jpg";
import Vine from "../../../public/on-a-vine.jpg";
import Days from "../../../public/days-end-ozzie-gonzalez.jpg";
const DesktopPortfolioCategories = () => {
  return (
    <div className={styles.desktopPortfolioCategories}>
      <header className={styles.headerWrapper}>
        <img className={styles.headerIcon} loading="lazy" alt="" src="/signature-dark.png" />
      </header>
      <Navbar />
      <div className={styles.masonry}>
        <div className={styles.masonryColumns}>
          <div className={styles.imageTextWrapper}>
            <a href="/landscape">
              <Image className={styles.imageIcon} alt="" src={Writing} width={400} height={500} />
            </a>
            <p className={styles.textWrapper}>Landscape portfolio</p>
          </div>
        </div>
        <div className={styles.masonryColumns}>
          <div className={styles.imageTextWrapper}>
            <a href="/wildlife">
              <Image className={styles.imageIcon} alt="" src={Vine} width={200} height={300} />
            </a>
            <p className={styles.textWrapper}>Wildlife portfolio</p>
          </div>
        </div>
        <div className={styles.masonryColumns}>
          <div className={styles.imageTextWrapper}>
            <a href="/galleries">
              <Image className={styles.imageIcon} alt="" src={Spot} width={400} height={300} />
            </a>
            <p className={styles.textWrapper}>Galleries by location</p>
          </div>
        </div>
        <div className={styles.masonryColumns}>
          <div className={styles.imageTextWrapper}>
            <a href="/lifestyle">
              <Image className={styles.imageIcon} alt="" src={Days} width={400} height={300} />
            </a>
            <p className={styles.textWrapper}>Lifestyle and Adventure portfolio</p>
          </div>
        </div>
      </div>
      {/* //   <div className={styles.textWrapper}>{`Landscape Portfolio `}</div>
      // </div>
      // <main className={styles.mainInner}>
      //   <section className={styles.imageGroup}>
      //     <img */}
      {/* //       className={styles.imageIcon}
      //       alt=""
      //       src="/cursivewritingozziegonzalez-1@2x.png"
      //     />
      //     <button className={styles.textContainer}>
      //       <div className={styles.text}>{`Landscape Portfolio `}</div>
      //     </button>
      //     <FrameComponent />
      //   </section> */}
      // {/* </main> */}
    </div>
  );
};

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div>
          <div className={styles.onAVineOzzieGonzalez1Parent}>
            <img className={styles.onAVineOzzieGonzalez1Icon} alt="" src="" />
            <button className={styles.wildlifePortfolioWrapper}>
              <div className={styles.wildlifePortfolio}>Wildlife portfolio</div>
            </button>
          </div>
          <div className={styles.theSpotOzzieGonzalez1Parent}>
            <img className={styles.theSpotOzzieGonzalez1Icon} alt="" src="" />
            <button className={styles.galleriesByLocationWrapper}>
              <div className={styles.galleriesByLocation}>Galleries by location</div>
            </button>
          </div>
        </div>
        {/* <div className={styles.daysEndOzzieGonzalez1Parent}>
          <img className={styles.daysEndOzzieGonzalez1Icon} alt="" src="" />
          <div className={styles.lifestyleAndAdventurePortfoWrapper}>
            <div className={styles.lifestyleAndAdventure}>Lifestyle and adventure portfollio</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DesktopPortfolioCategories;
