import React from "react";
import styles from "@/styles/modules/Portfolio.module.css";

const frameItems = [
  {
    src: "/onavineozziegonzalez-1@2x.png",
    label: "Wildlife portfolio",
  },
  {
    src: "/thespotozziegonzalez-1@2x.png",
    label: "Galleries by location",
  },
  {
    src: "/daysendozziegonzalez-1@2x.png",
    label: "Lifestyle and adventure portfolio",
  },
];

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      {frameItems.map((item, index) => (
        <div key={index} className={styles.frameGroup}>
          <img className={styles.onAVineOzzieGonzalez1Icon} alt="" src={item.src} />
          <button className={styles.wildlifePortfolioWrapper}>
            <div className={styles.wildlifePortfolio}>{item.label}</div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FrameComponent;
