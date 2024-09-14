import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Portfolio.module.css";
import silentRoad from "../../../public/silent-road.jpg"
import roadtoSerenity from "../../../public/road-to-serenity.jpg";
import Dragon from "../../../public/dragon.jpg";
import "../../styles/Workshops.scss";

const workshops = () => {
  return (
    <>
      <div className={styles.desktopPortfolioCategories}>
        <header className={styles.headerWrapper}>
          <img className={styles.headerIcon} loading="lazy" alt="" src="/signature-dark.png" />
        </header>
        <Navbar />
        <div className="page__container">
          <h1 className="page__title">
            Discover the Art <br/> and Craft <br/> of <span style={{ color: "#0058DD" }}>Photography</span>
          </h1>
          <div className="page__header">
            <div className="image__container">
              <Image className="image__card" src={silentRoad} alt="grayscale of trees and rivers" height={300} width={200} />
              <Image className="image__card" src={roadtoSerenity} alt="sunset view of everglades marsh" height={300} width={200} />
              <Image className="image__card" src={Dragon} alt="reflective clouds over ocean view" height={300} width={200} />
            </div>
          </div>
        </div>
        <div className="page__content">
          <p className="page__text">
            My workshops provide a supportive environment for growth and learning. <br/>Through a blend of theoretical insights, practical demonstrations,
            and hands-on shooting sessions, you'll gain the knowledge and confidence to capture stunning images.
          </p>
          <p className="page__text">
            Join our vibrant community of fellow shutterbugs and embark on an exciting journey of creativity and discovery.
          </p>
          <p className="page__text">Browse my upcoming workshops and reserve your spot today. Let's capture unforgettable moments together!</p>
        </div>
      </div>
    </>
  );
};

export default workshops;
