import Navbar from "@/components/Navbar/Navbar";
import styles from "@/styles/modules/Portfolio.module.css";
import React from "react";

const Workshops = () => {
  return (
    <div className={styles.desktopPortfolioCategories}>
      <header className={styles.headerWrapper}>
        <img className={styles.headerIcon} loading="lazy" alt="" src="/signature-dark.png" />
      </header>
      <Navbar />
    </div>
  );
};

export default Workshops;
