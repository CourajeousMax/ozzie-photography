import Navbar from "@/components/Navbar";
import styles from "../../styles/Portfolio.module.css";
import React from "react";

const workshops = () => {
  return (
    <div className={styles.desktopPortfolioCategories}>
      <header className={styles.headerWrapper}>
        <img className={styles.headerIcon} loading="lazy" alt="" src="/signature-dark.png" />
      </header>
      <Navbar />
    </div>
  );
};

export default workshops;
