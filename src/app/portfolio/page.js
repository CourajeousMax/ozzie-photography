import Navbar from "@/components/Navbar/Navbar";
import styles from "@/styles/modules/Portfolio.module.css";
import FrameComponent from "@/components/FrameComponent/FrameComponent";
import React from "react";

const DesktopPortfolioCategories = () => {
  return (
    <div className={styles.desktopPortfolioCategories}>
      <header className={styles.headerWrapper}>
        <img className={styles.headerIcon} loading="lazy" alt="" src="/signature-dark.png" />
      </header>
      <Navbar />
      <div className={styles.imageTextWrapper}>
        <img className={styles.imageIcon} alt="" src="/cursivewritingozziegonzalez-1@2x.png" />
        <div className={styles.textWrapper}>{`Landscape Portfolio `}</div>
      </div>
      <main className={styles.mainInner}>
        <section className={styles.imageGroup}>
          <img className={styles.imageIcon} alt="" src="/cursivewritingozziegonzalez-1@2x.png" />
          <button className={styles.textContainer}>
            <div className={styles.text}>{`Landscape Portfolio `}</div>
          </button>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default DesktopPortfolioCategories;
