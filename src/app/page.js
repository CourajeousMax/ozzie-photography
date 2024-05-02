import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (

    <div className={styles.desktopOverview}>
      <section className={styles.fullScreenBackground}/>
      <header className={styles.headerContent}>
        <Image
          className={styles.logo}
          loading="lazy"
          alt=""
          src="/signature.png"
          width={300}
          height={112}
        />
      </header>
    </div>
  );
}